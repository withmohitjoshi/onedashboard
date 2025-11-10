import { STATUS_CODES } from '@utils/constants';
import { ApiError, ValidationError } from '@utils/structures';

export function validateReq(schema, target = 'body') {
  if (!schema) throw new ApiError({ message: 'Schema is required for request validation' });
  return (req, _, next) => {
    // Validate the target property (req.body, req.query, or req.params)
    const { error, value } = schema.validate(req[target], {
      // Stop validation on first error found
      abortEarly: false,
      // Allow unknown fields (remove this in strict mode)
      allowUnknown: false,
      // Remove unknown fields (sanitization)
      stripUnknown: true,
    });

    if (error) {
      throw new ValidationError({
        statusCode: STATUS_CODES.BAD_REQUEST,
        message: 'Invalid request body',
        errors: error.details.map(detail => detail.message),
      });
    }

    req[target] = value;
    next();
  };
}
