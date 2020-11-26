"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberDetail = void 0;
const member_detail_1 = require("../../model/member/member_detail");
exports.getMemberDetail = (req, res, next) => {
    const memberId = req.params.id || 0;
    console.log('memberId', memberId);
    const findMemberId = [
        {
            firstName: 'Nacharoen',
            lastName: 'Nensai',
            id: 1,
            email: 'nacharoen@gg.com'
        },
        {
            firstName: 'Bob',
            lastName: 'Sma',
            id: 2,
            email: 'Bob@gg.com'
        }
    ].find((item) => item.id === +memberId);
    if (findMemberId) {
        res.status(200).json({
            message: 'ok',
            status: 200,
            statusText: 'ok',
            data: new member_detail_1.getMemberDetails(findMemberId)
        });
    }
    else {
        res.status(200).json({
            message: 'ok',
            status: 200,
            statusText: 'ok',
            data: {}
        });
    }
};
