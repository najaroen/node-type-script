"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorHandler = void 0;
exports.apiErrorHandler = (err, req, res, next) => {
    return res.status(400).json(err.publicVersion());
};
