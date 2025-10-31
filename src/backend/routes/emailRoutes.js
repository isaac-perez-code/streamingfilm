import express from 'express';
import { registerUser} from '../controllers/emailControllers.js';

const router = express.Router();

/**
 * @swagger
 * /api/email/register:
 *  post:
 *    summary: REGISTRAR NUEVO USUARIO Y ENVIAR
 *    tags: [Email]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: isaac@senati.pe
 *              name:
 *                type: string
 *                example: isaac
 *  responses:
 *    200:
 *      description: Email enviado correctamente
 *    500:
 *      description: Error del servicio al enviar Email
 */
router.post('/register', registerUser)

export default router;