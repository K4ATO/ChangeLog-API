import { validationResult } from 'express-validator';

// checks if there are errors in the request.
export const handleInputErrors = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    } else {
        next();
    }
};
