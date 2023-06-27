const express = require('express');
const mongoose = require('mongoose')
const routes = require("./routes/user.js")
require("dotenv").config();
const app = express();
const port = 3000;

//MIDDLEWARE
app.use("/api/users", routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send("Welcome to my first API made with MongoDb...")
})

//CONEXIÓN
mongoose.connect(process.env.mongodb_uri)
  .then(()=> console.log("CONECTED...."))
  .catch((err)=> console.log(err))

app.listen(port, ()=> console.log(`Listen on port: ${port}`));