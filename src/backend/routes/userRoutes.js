import express from 'express';
import { userController } from '../controllers/userController';
import { userService } from '../services/userServices';

const router = express.Router();

//Definir rutas para llamar al usuario
router.get('/', userController.getUsers);
router.post('/', userController.createUser);

export default router;

