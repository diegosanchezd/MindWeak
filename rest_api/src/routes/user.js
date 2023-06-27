const express = require("express");
const userSchema = require("../models/user.js")
const router= express.Router();

//CREATE USER
router.post('/createUser', (req, res)=> {
  const user = userSchema(req.body);
  user.save()
    .then((data) => res.json({data, user}))
    .catch((err) => res.json(err))
})

module.exports = router