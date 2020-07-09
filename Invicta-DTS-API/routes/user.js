const router = require("express").Router();
const mongoose = require("mongoose");
const express = require("express");
let user = require("./../models/user.model");
const users = mongoose.model("user");
const bcrypt = require("bcryptjs");

router.post("/signup", (req, res) => {
  const { userName, email, password } = req.body;
  if (!email || !password || !userName) {
    return res.status(422).json({ error: "Please fill the all fields" });
  }
  users
    .findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exist with that email" });
      }
      bcrypt.hash(password, 12).then(hashedPassword => {
        const users = new user({
          email,
          password:hashedPassword,
          userName,
        });
        users.save().then((users) => {
          res
            .json({
              message: "Successfully Saved",
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if(!email || !password){
       return res.status(422).json({error: "Please provide the email and password"})
    }
    users.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"invalid username password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                res.json({message:"Succesfully Sgn In"})
            }
            else{
                return res.status(422).json({error:"invalid username password"})
            }
        })
        .catch(err=>{
            console.log(err);
        })
    })
})

module.exports = router;
