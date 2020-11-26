import { RequestHandler } from 'express';
import {getMember} from '../../model/member/get_member';
export const apiGetMember: RequestHandler = (req, res, next) => {
    res.status(200).json({
        message:'ok',
        status:200,
        statusText:'ok',
        data:[
            {
                firstName: 'Nacharoen',
                lastName: 'Nensai',
                id:1,
                email:'nacharoen@gg.com'
            }
        ].map((item:any) => new getMember(item))
    })
}