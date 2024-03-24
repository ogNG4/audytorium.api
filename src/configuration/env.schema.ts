import Joi from 'joi';

export const envSchema = Joi.object({
    // Database - Schema
    DB_HOST: Joi.string().default('localhost'),
    DB_PORT: Joi.number().default(5432),
    DB_USER: Joi.string(),
    DB_PASSWORD: Joi.string(),
    DB_NAME: Joi.string(),
    DB_TYPE: Joi.string().default('postgres'),
});
