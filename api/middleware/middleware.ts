import { Request, Response, NextFunction } from "express";
import { tokens } from "../tokens";

class MiddleWare {

    checkAuth(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.authorization || tokens.filter((token: string) => token == req.headers.authorization).length == 0) {
            return res.status(403).json({ error: 'Invalid Token' })
        }
        next()
    }

}

export const midlleWare = new MiddleWare();