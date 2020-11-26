import { RequestHandler, ErrorRequestHandler } from 'express';

export const apiErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    return res.status(400).json(err.publicVersion());
}