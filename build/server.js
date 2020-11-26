"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyparser = __importStar(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const member_1 = require("./api/member/member");
const member_detail_1 = require("./api/member/member_detail");
const errorHandling_1 = require("./api/general/errorHandling");
const app = express_1.default();
const urlEnccodedParser = bodyparser.urlencoded({ extended: true });
const authenticator = (req, res, next) => {
    const username = 'admin';
    req.user = username;
    next();
};
const logger = morgan_1.default('dev');
app.use(urlEnccodedParser);
app.use(logger);
app.use(authenticator);
app.get('/', (req, res, next) => {
    res.send('Wellcome to API');
});
app.get('/api/memberlist', member_1.apiGetMember);
app.get('/api/member/:id', member_detail_1.getMemberDetail);
app.use(errorHandling_1.apiErrorHandler);
app.listen(process.env.PORT || 3000, () => {
    console.log('running...');
});
