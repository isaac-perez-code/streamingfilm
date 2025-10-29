import express from 'express';
import { authControllers } from '../controllers/authControllers.js';
const router = express.Router();

/**
 * @swagger 
 * components:
 *  securitySchemes:
 *    BearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 */

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: Registrar nuevo usuario
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: isa@gmail.com
 *              name:
 *                type: string
 *                example: isaac
 *              password:
 *                type: string
 *                example: isa1202
 *    responses:
 *      201:
 *        description: Usuario registrado exitosamente
 *      400:
 *        description: Datos enviados incorrectos
 *      500:
 *        description: Error interno del sistema
 */
        router.post('/register', authControllers.register)

export default router;