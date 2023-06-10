import joi from 'joi';
import { userConstants } from '../../core/constants';
import { userSignUpData } from '../../interface';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex =
  // eslint-disable-next-line no-useless-escape
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_])[A-Za-z\!@#$%^&*()-_]{8,}$/;

const validateUserSignUpPayload = (userSignUpPayload: userSignUpData) => {
  const signUpDate = joi.object({
    firstname: joi.string().lowercase().required().messages({
      'any.required': userConstants.userErrorMessages.firstNameRequired,
    }),
    lastname: joi.string().lowercase().required().messages({
      'any.required': userConstants.userErrorMessages.lastNameRequired,
    }),
    password: joi
      .string()
      .required()
      .min(8)
      .max(50)
      .pattern(new RegExp(passwordRegex))
      .messages({
        'string.min': userConstants.userErrorMessages.passwordMin,
        'string.max': userConstants.userErrorMessages.passwordMax,
        'string.pattern.base': userConstants.userErrorMessages.passwordNotValid,
        'any.required': userConstants.userErrorMessages.passwordRequired,
      }),
    email: joi
      .string()
      .lowercase()
      .required()
      .pattern(new RegExp(emailRegex))
      .messages({
        'string.pattern.base': userConstants.userErrorMessages.emailNotvalid,
        'any.required': userConstants.userErrorMessages.emailRequired,
      }),
  });
  return signUpDate.validate(userSignUpPayload);
};

export { validateUserSignUpPayload };
