const { ObjectId } = require('mongodb');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());


const jwt = require('jsonwebtoken');

function generateAuthToken(user) {
  // Define la información que deseas incluir en el token (por ejemplo, el ID de usuario)
  const payload = { userId: user._id };

  // Genera el token utilizando la clave secreta (puede ser cualquier cadena de caracteres)
  const token = jwt.sign(payload, '15120364', { expiresIn: '1h' });

  return token;
}


function createRouter(db) {
    router.get('/getUsers', async (req, res) => {
        try {
            const userCollection = db.collection('userDetails');
            const users = await userCollection.find().toArray();
            res.json(users);
        } catch (error) {
            console.error('Error al obtener los Usuarios', error);
            res.status(500).json({ error: 'Error al obtener los Usuarios' });
        }
    });

    router.post('/createUser', async (req, res) => {
        try {
            const userCollection = db.collection('userDetails');
            const nuevoUser = req.body;
            await userCollection.insertOne(nuevoUser);
            res.status(201).json({ message: 'Usuario creado exitosamente' });
        } catch (error) {
            console.error('Error al crear el usuario', error);
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    });

    router.put('/editUser/:id', async (req, res) => {
        try {
            const userCollection = db.collection('userDetails');
            const userId = new ObjectId(req.params.id);
            const userActualizado = req.body;
            await userCollection.updateOne({ _id: userId }, { $set: userActualizado });
            console.log('userId:', userId);
            console.log('user Actualizado:', userActualizado);

            res.json({ message: 'User actualizado exitosamente' });
        } catch (error) {
            console.error('Error al actualizar el user', error);
            res.status(500).json({ error: 'Error al actualizar el user' });
        }
    });

    router.delete('/:id', async (req, res) => {
        try {
            const userCollection = db.collection('userDetails');
            const userId = new ObjectId(req.params.id);
            await userCollection.deleteOne({ _id: userId });
            res.json({ message: 'Usuario eliminado exitosamente' });
        } catch (error) {
            console.error('Error al eliminar el usuario', error);
            res.status(500).json({ error: 'Error al eliminar el usuario' });
        }
    });

    router.post('/login', async (req, res) => {
        try {
          const userCollection = db.collection('userDetails');
          const { userName, password } = req.body;
          
          // Realizar la lógica de autenticación aquí, como verificar las credenciales del usuario
          
          // Por ejemplo, buscar al usuario en la base de datos y verificar la contraseña
          const user = await userCollection.findOne({ userName });
          if (!user || user.password !== password) {
            res.status(401).json({ error: 'Credenciales inválidas' });
            return;
          }
      
          // Si las credenciales son válidas, puedes generar un token de autenticación y devolverlo en la respuesta
          const token = generateAuthToken(user); // función para generar el token de autenticación
          res.json({ token });
      
        } catch (error) {
          console.error('Error en el inicio de sesión', error);
          res.status(500).json({ error: 'Error en el inicio de sesión' });
        }
      });
      

    return router;
}

module.exports = createRouter;


