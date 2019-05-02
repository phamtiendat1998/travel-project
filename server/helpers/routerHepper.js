const Joi = require('joi');
const jsonHelpper = require('./jsonHelpper');

module.exports = {
    validateParam: (schema, name) => {
        return (req, res, next) => {
            const result = Joi.validate({ param: req['params'][name] }, schema);
            if (result.error) {
                jsonHelpper.failJson(400, res, result.error);
            } else {
                if (!req.value)
                    req.value = {};
                if (!req.value['params'])
                    req.value['params'] = {}
                req.value['params'][name] = result.value.param;
                next();
            }
        }
    },
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                jsonHelpper.failJson(400, res, result.error);
            } else {
                if (!req.value)
                    req.value = {};
                if (!req.value['body'])
                    req.value['body'] = {}
                req.value['body'][name] = result.value.param;
                next();
            }
        }
    },
    schemas: {
        userSchema: Joi.object().keys({
            first_name: Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required(),
            last_name: Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required(),
            email: Joi.string().email().required(),
            country: Joi.string().required(),
            user_name: Joi.string().regex(/^(?!.*__.*)(?!.*\.\..*)[a-z0-9_.]+$/).required(),
            pass_word: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).required(),
            category_acc: Joi.string().required()
        }),
        userOptionalSchema: Joi.object().keys({
            first_name: Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
            last_name: Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
            email: Joi.string().email(),
            country: Joi.string(),
            user_name: Joi.string().regex(/^(?!.*__.*)(?!.*\.\..*)[a-z0-9_.]+$/),
            pass_word: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
            category_acc: Joi.string()
        }),
        idSchema: Joi.object().keys({
            user_id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    }
}