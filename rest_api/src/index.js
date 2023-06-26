const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to my first API made with MongoDb")
})

app.listen(port, ()=> console.log(`Listen on port: ${port}`));