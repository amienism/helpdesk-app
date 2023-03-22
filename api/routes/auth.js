var express = require('express');
var router = express.Router();
const model = require('../models/index')
const {rest_error, rest_ok, generateString} = require('../helpers/index')
const bcrypt = require('bcrypt')
const {request_validation} = require('../middleware/request_validation')
const {register, login} = require('../schemas/index')
const nodemailer = require('nodemailer')

/* GET home page. */
router.post('/login', request_validation(login, 'body'), async function(req, res, next) {
  const user = await model.users.findOne({
    where: {
      email: req.body.email
    }
  })
  if(!user){
    res.status(400).json(rest_error('Email or password is wrong', user))
  }
  
  const match = bcrypt.compareSync(req.body.password, user.password)
  res.send(match)
});

router.post('/register', request_validation(register, 'body'),  async (req, res, next) => {
    const t = await model.sequelize.transaction();

    try {
      const findUser = await model.users.findOne({
        where: {
          email: req.body.email
        }
      })
      
      console.log(findUser)
      
      if(findUser){
        throw "Email already registered"
      }

      req.body.password = bcrypt.hashSync(req.body.password, 10);
      const randomString = generateString(8);
      
      const user = await model.users.create({verification_token: randomString, ...req.body}, { transaction: t })

      let transporter = nodemailer.createTransport({
        port: 1025,
      });

      let info = await transporter.sendMail({
        from: '"Helpdesk App" <foo@example.com>',
        to: user.email, 
        subject: "Please vericiation your email.",
        html: `<p>Click link below to verification your email</p><br><p><a href="http://localhost:5173/auth/verification/${randomString}">http://localhost:5173/auth/verification/${randomString}</a></p>`,
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

    const confirmUser = model.users.update({status: 1}, {where: {verification_token: req.params.token}})
    await t.commit();
    res.status(200).json(rest_ok("Successfully confirm email address.", {}))
  } catch (error) {
    await t.rollback();
    res.status(400).json(rest_error(error, {}))    
  }
})

module.exports = router;
