import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authoToken = req.headers.authorization;

    if(!authoToken) {
        return res.status(401).end();
    }

    const [, token] = authoToken.split(" ")

    try {
        const {sub} = verify(
            token,
            process.env.JWT

        ) as PayLoad;

        req.user_id = sub;

        return next();

    } catch(err) {
        return res.status(401).end();
    }
}