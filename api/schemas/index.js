const joi = require('joi');


module.exports = {
    register: joi.object({
        name: joi.string().required().messages({'any.required': "Please fill name field", 'string.empty': "Pelase fill name field"}),
        email: joi.string().email().required().messages({'any.required': "Please fill email field", 'string.empty': "Pelase fill email field"}),
        password: joi.string().required().messages({'any.required': "Please fill password field", 'string.empty': "Pelase fill password field"}),
        confirm_password: joi.any().valid(joi.ref('password')).required().messages({'any.required':"Please fill confirm password field", 'any.only':"Password must match"}),
    }),
    login: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
    }),
    changePassword: joi.object({
        email: joi.string().email().required().messages({'any.required': "Please fill email field", 'string.empty': "Pelase fill email field"}),
    })
}