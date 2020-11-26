import exress, { RequestHandler } from 'express';
import * as bodyparser from 'body-parser'; 
import morgan from 'morgan';

import { apiGetMember } from './api/member/member';
import { getMemberDetail } from './api/member/member_detail';
import { CustomRequestHandler } from './model/express';
import { apiErrorHandler } from './api/general/errorHandling';
const app = exress();
const urlEnccodedParser = bodyparser.urlencoded({extended:true});

const authenticator: CustomRequestHandler = (req, res, next) => {
    const username = 'admin';
    req.user = username;
    next();
}
const logger = morgan('dev');

app.use(urlEnccodedParser);
app.use(logger);
app.use(authenticator);


app.get('/', (req, res, next) => {
    res.send('Wellcome to API')
})
app.get('/api/memberlist', apiGetMember);
app.get('/api/member/:id', getMemberDetail)
app.use(apiErrorHandler)

app.listen(process.env.PORT || 3000, () => {
    console.log('running...')
})