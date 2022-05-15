import User from "../model/user.model";
import client from "./client";

async function findUser(email:string){
    let sql = 'SELECT * FROM users WHERE useremail=$1'
    let res = await client.query(sql, [email])
    if (res.rows.length === 0) {
      return null
    }
    return res.rows[0] as User
}

async function register(user:User){
    let sql = `INSERT INTO users(username,usersurname,useremail,userpassword,usernumber)
    VALUES($1,$2,$3,$4)`
    await client.query(sql,[user.username,user.usersurname,user.useremail,user.userpassword])
}

export default {
    findUser,
    register
}