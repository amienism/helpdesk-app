var express = require('express');
var router = express.Router();
const model = require('../models/index')
const {rest_error, rest_ok, generateString, confirmEmailTemp, confirmChangePasswordTemp} = require('../helpers/index')
const bcrypt = require('bcrypt')
const {request_validation} = require('../middleware/request_validation')
const {register, login, changePassword} = require('../schemas/index')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken');
const jwt_validation = require('../middleware/jwt_validation');

router.post('/login', request_validation(login, 'body'), async function(req, res, next) {
  try {
    const user = await model.users.findOne({
      where: {
        email: req.body.email,
        status: 1,
      },
    })

    if(!user){
      throw "Email or password is wrong/please confirmation your email first."
    }
    
    const match = bcrypt.compareSync(req.body.password, user.password)
    if(!match){
      throw "Email or password is wrong"
    }

    const token = jwt.sign({
      id: user.dataValues.id,
      email: user.dataValues.email,
      name: user.dataValues.name,
      role: user.dataValues.role,
      status: user.dataValues.status,
    }, process.env.SECRET_KEY, {expiresIn: '10m'})

    res.status(200).json(rest_ok("Login successful", {token: token}))
  } catch (error) {
    res.status(400).json(rest_error(error, {}))
  }
});

router.post('/register', request_validation(register, 'body'),  async (req, res, next) => {
    const t = await model.sequelize.transaction();

    try {
      const findUser = await model.users.findOne({
        where: {
          email: req.body.email
        }
      })
      
      if(findUser){
        throw "Email already registered"
      }

      req.body.password = bcrypt.hashSync(req.body.password, 10);
      const randomString = generateString(8);
      
      const user = await model.users.create({verification_token: randomString, role: 3, ...req.body}, { transaction: t })

      let transporter = nodemailer.createTransport({
        port: 1025,
      });

      let info = await transporter.sendMail({
        from: '"Helpdesk App" <foo@example.com>',
        to: user.email, 
        subject: "Registration Verification for Helpdesk-App",
        html: confirmEmailTemp(randomString),
      });

      await t.commit();
      res.status(200).json(rest_ok("Succesfully register your email, please check your email for confirmation.", user))
    } catch (error) {
      await t.rollback();
      res.status(400).json(rest_error(error, {}))
    }  
})

router.get('/verification/:token', async (req, res, next) => {
  const t = await model.sequelize.transaction();

  try {
    const user = await model.users.findOne({
      where: {
        verification_token: req.params.token
      }
    })

    if(!user){
      throw "Your account not found."
    }

    if(user.status == 1){
      throw "Your account already activated."
    }

    const confirmUser = model.users.update({status: 1}, {where: {verification_token: req.params.token}}, {transaction: t})
    await t.commit();
    res.status(200).json(rest_ok("Successfully confirm email address.", {}))
  } catch (error) {
    await t.rollback();
    res.status(400).json(rest_error(error, {}))    
  }
})

router.post('/change-password',  request_validation(changePassword, 'body'), async(req, res, next) => {
  const t = await model.sequelize.transaction();

  try {
    const findUser = await model.users.findOne({
      where: {
        email: req.body.email
      }
    })

    if(!findUser){
      throw "No account registered with this " + req.body.email + " email, please check again."
    }

    if(findUser.status == 0){
      throw "Please confirm your email address first."
    }

    const randomString = generateString(8);

    const user = await model.users.update({verification_token: randomString}, {where: {email: req.body.email}}, { transaction: t })

    let transporter = nodemailer.createTransport({
      port: 1025,
    });

    let info = await transporter.sendMail({
      from: '"Helpdesk App" <foo@example.com>',
      to: req.body.email, 
      subject: "Change Password request for your Helpdesk-App Account",
      html: confirmChangePasswordTemp(randomString),
    });

    await t.commit();
    res.status(200).json(rest_ok("Change password request has been send to your email, please check your email to complete the process.", {}))
  } catch (error) {
      await t.rollback();
      res.status(400).json(rest_error(error, {}))
  }
})

router.get('/validate', jwt_validation.authenticateJWT, async(req, res, next) => {
  try {
    const findUser = await model.users.findOne({
      where: {
        email: req.user.email
      }
    })

    if(!findUser){
      throw "Authentication failed, please login to continue"
    }

    res.status(200).json(rest_ok("Validate user success", req.user))
  } catch (error) {
    res.status(400).json(rest_error(error, {}))
  }
})

module.exports = router;
