"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetMember = void 0;
const get_member_1 = require("../../model/member/get_member");
exports.apiGetMember = (req, res, next) => {
    res.status(200).json({
        message: 'ok',
        status: 200,
        statusText: 'ok',
        data: [
            {
                firstName: 'Nacharoen',
                lastName: 'Nensai',
                id: 1,
                email: 'nacharoen@gg.com'
            }
        ].map((item) => new get_member_1.getMember(item))
    });
};
