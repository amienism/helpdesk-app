const joi = require('joi');


module.exports = {
    register: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
        confirm_password: joi.ref('password'),
    }),
    login: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
    })
}