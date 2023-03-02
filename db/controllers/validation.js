// Validation
const Joi = require('@hapi/joi')

// Login Validation
const passwordValidation = (data) => {
  const schema = Joi.object({
    password: Joi.string().min(4).required()
  });
  return schema.validate(data);
}


module.exports = {
    passwordValidation
};