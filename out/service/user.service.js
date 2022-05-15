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
const client_1 = __importDefault(require("./client"));
function findUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = 'SELECT * FROM users WHERE useremail=$1';
        let res = yield client_1.default.query(sql, [email]);
        if (res.rows.length === 0) {
            return null;
        }
        return res.rows[0];
    });
}
function register(user) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = `INSERT INTO users(username,usersurname,useremail,userpassword,usernumber)
    VALUES($1,$2,$3,$4)`;
        yield client_1.default.query(sql, [user.username, user.usersurname, user.useremail, user.userpassword]);
    });
}
exports.default = {
    findUser,
    register
};
