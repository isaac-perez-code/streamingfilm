import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();

//Rutas para llamar al usuario
router.get('/',userController.getUsers);
router.post('/',userController.createUser);
router.put('/:id', userController.updateUser);

//Método para eliminar DELETE
//Método para modificar PATCH

export default router;
