const { ObjectId } = require('mongodb');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

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

    return router;
}

module.exports = createRouter;


