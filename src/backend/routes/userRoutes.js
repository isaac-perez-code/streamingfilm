import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         email:
 *           type: string
 *           example: isaa@gmail.com
 *         name:
 *           type: string
 *           example: Isaac Pérez
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener la lista de usuarios
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 */
router.get('/',userController.getUsers);    

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: isaac@gmail.com
 *               name:
 *                 type: string
 *                 example: Isaac Code
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Solicitud inválida - faltan campos obligatorios
 *       500:
 *         description: Error del servidor al crear el usuario
 */
router.post('/',userController.createUser);

/** 
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar un usuario existente
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: isaac@gmail.com
 *               name:
 *                 type: string
 *                 example: Isaac Code Updated
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *                 message:
 *                   type: string
 *                   example: Usuario actualizado correctamente
 *       400:
 *         description: Datos de entrada inválidos
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', userController.updateUser);

//Rutas para llamar al usuario
router.get('/',userController.getUsers);
router.post('/',userController.createUser);
router.put('/:id', userController.updateUser);

//Método para eliminar DELETE
//Método para modificar PATCH

export default router;
