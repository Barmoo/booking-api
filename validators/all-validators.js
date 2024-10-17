import Joi from 'joi';

const addAllValidator = Joi.object({
    title: Joi.string().required(),
    icon: Joi.string().required()
});

export const updateAllValidator = Joi.object({
    title: Joi.string(),
    icon: Joi.string(),
    completed: Joi.boolean()
});