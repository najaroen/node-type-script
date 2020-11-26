import { RequestHandler } from 'express';
import { getMemberDetails } from '../../model/member/member_detail';
export const getMemberDetail:RequestHandler = (req, res, next) => {
    const memberId = req.params.id || 0
    console.log('memberId', memberId)
    const findMemberId = [
        {
            firstName: 'Nacharoen',
            lastName: 'Nensai',
            id:1,
            email:'nacharoen@gg.com'
        },
        {
            firstName: 'Bob',
            lastName: 'Sma',
            id:2,
            email:'Bob@gg.com'
        }
    ].find((item) => item.id === +memberId);

    if(findMemberId) {
        res.status(200).json({
            message:'ok',
            status:200,
            statusText:'ok',
            data: new getMemberDetails(findMemberId)
        })
    } else {
        res.status(200).json({
            message:'ok',
            status:200,
            statusText:'ok',
            data: {}
        })
    }
}