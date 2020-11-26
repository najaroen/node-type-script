import exress from 'express';
import { apiGetMember } from './api/member/member';
import { getMemberDetail } from './api/member/member_detail';
const app = exress();

app.get('/', (req, res, next) => {
    res.send('Wellcome to API')
})
app.get('/api/memberlist', apiGetMember);
app.get('/api/member/:id', getMemberDetail)

app.listen(process.env.PORT || 3000, () => {
    console.log('running...')
})