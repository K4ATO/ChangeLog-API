import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// compares plain password from sign in with the hashed stored one
export const comparePasswords = (password, hash) =>
    bcrypt.compare(password, hash);

// hashes plain password
export const hashPassword = (password) => bcrypt.hash(password, 5);

// creates Json Web Token for Users with {id, username, secret}
export const createJWT = (user) => {
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET
    );
    return token;
};

// Auth middleware that checks the request header for an bearer token.
// verifying it with user's jwt
export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(401);
        res.json({ message: 'not authorized' });
        return;
    }

    const [, token] = bearer.split(' ');
    if (!token) {
        res.status(401);
        res.json({ message: 'not valid token' });
        return;
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (e) {
        res.status(401);
        res.json({ message: 'not valid token' });
        return;
    }
};
