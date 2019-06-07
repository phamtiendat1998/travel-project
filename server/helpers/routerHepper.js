const Joi = require('joi');
const jsonHelpper = require('./jsonHelpper');

module.exports = {
    validateParam: (schema, name) => {
        return (req, res, next) => {
            const result = Joi.validate({ [name]: req['params'][name] }, schema);
            if (result.error) {
                jsonHelpper.failJson(400, res, result.error);
            } else {
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
                next();
            }
        }
    },
    schemas: {
        userSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            user_name: Joi.string().regex(/^(?!.*__.*)(?!.*\.\..*)[a-z0-9_.]+$/).required(),
            pass_word: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).required(),
            category_acc: Joi.string().required(),
        }),
        userOptionalSchema: Joi.object().keys({
            first_name: Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
            last_name: Joi.string().regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
            email: Joi.string().email(),
            country: Joi.string(),
            user_name: Joi.string().regex(/^(?!.*__.*)(?!.*\.\..*)[a-z0-9_.]+$/),
            pass_word: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
            category_acc: Joi.string(),
            status: Joi.boolean()
        }),
        accountSchema: Joi.object().keys({
            user_name: Joi.string().regex(/^(?!.*__.*)(?!.*\.\..*)[a-z0-9_.]+$/).required(),
            pass_word: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).required()
        }),
        placeSchema: Joi.object().keys({
            code: Joi.string().required(),
            name: Joi.string().required(),
            area: Joi.string().required(),
            temp: Joi.number().required(),
            location: {
                x: Joi.number().required(),
                y: Joi.number().required()
            },
            airport: Joi.array().required(),
            category: Joi.string().required()
        }),
        tripSchema: Joi.object().keys({
            from: Joi.string().required(),
            to: Joi.string().required(),
            price: Joi.number().required(),
            time: {
                day: Joi.number().required(),
                night: Joi.number().required()
            },
            timeFlight: Joi.number().required()
        }),
        idUserSchema: Joi.object().keys({
            user_id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
        idPlaceSchema: Joi.object().keys({
            place_id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        }),
        idTripSchema: Joi.object().keys({
            trip_id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        }),
        idFromPlaceSchema: Joi.object().keys({
            from_place_id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        }),
    }
}