const joi = require('joi');
const {rest_error} = require('../helpers');

module.exports = {
    request_validation(schema, property){
        return (req, res, next) => {
            const { error } = schema.validate(req[property], {abortEarly: false});
            
            if(error){
                let newError = {}
                error.details.forEach((b)=>{
                    newError[b.context.key] = b.message
                })

                return res.status(400).json(rest_error("An error occurred, please check your form again", newError))
            }

            next();
        }
    }
}