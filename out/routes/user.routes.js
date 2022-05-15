"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = __importDefault(require("../service/client"));
const user_service_1 = __importDefault(require("../service/user.service"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    let { email, password } = req.body;
    user_service_1.default.findUser(email)
        .then(user => {
        if (user && user.userpassword === password) {
            return res.redirect('/room');
        }
        else {
            return res.send('Email or password wrong!');
        }
    })
        .catch(err => {
        res.send('Internal Error! ' + err);
    });
});
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = {
        id: 0,
        username: req.body.username,
        usersurname: req.body.usersurname,
        useremail: req.body.useremail,
        userpassword: req.body.userpassword,
        usernumber: req.body.usernumber
    };
    let sql = `INSERT INTO users(username,usersurname,useremail,userpassword,usernumber)
  VALUES($1,$2,$3,$4)`;
    yield client_1.default.query(sql, [user.username, user.usersurname, user.useremail, user.userpassword, user.usernumber]);
}));
exports.default = router;
