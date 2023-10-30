import { Request, Response, NextFunction } from "express";
import { tokens } from "../tokens";

export function checkAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization || tokens.filter((token: string) => token == req.headers.authorization).length == 0) {
        return res.status(403).json({ error: 'Invalid Token' })
    }
    next()
}