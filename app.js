const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser= require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  // res.cookie("name", "vijay");

  //todo encrypt
  // bcrypt.genSalt(10, (err, salt) => {
  //     bcrypt.hash("vijaypassword",salt, (err, hash) => {
  //         console.log(hash);
  //     })
  // })

  //todo decrypt
  //   bcrypt.compare('vijaypassword','$2b$10$2s5dBLcRbWVqOumVMVa1SeSZzGcozc7QX7fOMJUNDOKPavCnqyfFW',(err,result)=>{
  //     console.log(result);
  //   })

  //todo cookie store using jwt

  let token = jwt.sign({ email: "vijayvinu46@gmal.com" }, "secretKey");
  res.cookie("token", token);

  res.send("cookie set");
});


app.get("/read", (req, res) => {

  let data = jwt.verify(req.cookies.token, "secretKey");
  console.log(data);

  res.send("reading cookies");
});

app.listen(3000);

// $2b$10$2s5dBLcRbWVqOumVMVa1SeSZzGcozc7QX7fOMJUNDOKPavCnqyfFW
// vijaypassword
