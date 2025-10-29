import express from 'express';
import { userControllers } from '../controllers/userControllers.js';

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
 *           example: isaac@gmail.com
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
router.get('/', userControllers.getUsers);

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
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Solicitud inválida - faltan campos obligatorios
 *       500:
 *         description: Error del servidor al crear el usuario
 */
router.post('/', userControllers.createUser);

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
router.put('/:id', userControllers.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Usuario eliminado correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', userControllers.deleteUser);

export default router;
