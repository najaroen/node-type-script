"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const member_1 = require("./api/member/member");
const member_detail_1 = require("./api/member/member_detail");
const app = express_1.default();
app.get('/', (req, res, next) => {
    res.send('Wellcome to API');
});
app.get('/api/memberlist', member_1.apiGetMember);
app.get('/api/member/:id', member_detail_1.getMemberDetail);
app.listen(process.env.PORT || 3000, () => {
    console.log('running...');
});
