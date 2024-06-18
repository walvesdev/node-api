import {plainToInstance} from 'class-transformer';
import {validate, ValidationError} from 'class-validator';
import {RequestHandler} from 'express';
import HttpException from "../services/http-exception";

function validationMiddleware<T>(type: any, skipMissingProperties = false): RequestHandler {
  return (req, res, next) => {
    
    validate(plainToInstance(type, req.body), {skipMissingProperties})
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors.map((error: ValidationError) => errors.map((error) => ({
            type: error.target?.constructor?.name,
            property: error.property,
            message: error.constraints![Object.keys(error.constraints!)[0]] || "",
          })));
          next(new HttpException(400, JSON.stringify(message, null, 2)));
        } else {
          next();
        }
      });
  };
}

export default validationMiddleware;

