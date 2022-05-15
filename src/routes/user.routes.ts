import { Router } from "express";
import User from "../model/user.model";
import client from "../service/client";
import userService from "../service/user.service";
const router = Router()
router.get('/',(req,res)=>{
    let { email, password } = req.body
  
  userService.findUser(email)
    .then(user => {
      if (user && user.userpassword === password) {
        return res.redirect('/room')
      }
      else {
        return res.send('Email or password wrong!')
      }
    })
    .catch(err => {
      res.send('Internal Error! ' + err)
    })
})
router.post('/',async (req,res)=>{
    type login = {
        email:string,
        password:string
    }
    let login:login = {
        email:req.body.email,
        password:req.body.password
    }
    let sql = 'SELECT * FROM users WHERE useremail=$1'
    await client.query(sql,[])
})
router.post('/register',async(req,res)=>{
  let user:User = {
    id:0,
    username:req.body.username,
    usersurname:req.body.usersurname,
    useremail:req.body.useremail,
    userpassword:req.body.userpassword,
    usernumber:req.body.usernumber
  }
  let sql = `INSERT INTO users(username,usersurname,useremail,userpassword,usernumber)
  VALUES($1,$2,$3,$4)`
  await client.query(sql,[user.username,user.usersurname,user.useremail,user.userpassword,user.usernumber])
})
export default router;