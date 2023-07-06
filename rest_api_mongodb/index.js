const express = require('express');
const { MongoClient } = require('mongodb');
const createRouter = require('./router');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.set('port', process.env.PORT || 3000);

const uri = 'mongodb+srv://diegosanchezet32:diegosanchezet32@clusterdiego.dhqfrd7.mongodb.net/';
const dbName = 'users';

async function connectToMongoDB() {
  try {
  
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    console.log('Conexión exitosa a MongoDB Atlas');
   
    const db = client.db(dbName);
    const router = createRouter(db);
    
    app.use('/api/users', router);

    app.listen(app.get('port'), () => {
      console.log(`Servidor en ejecución en el puerto ${app.get('port')}`);
    });
  } catch (error) {
    console.error('Error al conectar a MongoDB Atlas', error);
  }
}

connectToMongoDB();
