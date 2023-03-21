var express = require('express');
var router = express.Router();
const model = require('../models/index')
const {rest_error, rest_ok} = require('../helpers/index')
const bcrypt = require('bcrypt')
const {request_validation} = require('../middleware/request_validation')
const {register, login} = require('../schemas/index')

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
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      const user = await model.users.create(req.body)
      res.status(200).json(rest_ok("Succesfully register your email, please check your email for confirmation.", user))
    } catch (error) {
      res.status(400).json(rest_error(error, {}))
    }  
})

module.exports = router;
