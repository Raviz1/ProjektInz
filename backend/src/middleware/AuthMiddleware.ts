import jwt from 'jsonwebtoken'
import express from 'express'


export const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        const decodedEmail = decoded;
        if (req.body.email && req.body.email !== decodedEmail) {
            throw 'Invalid user ID';
        }
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};
