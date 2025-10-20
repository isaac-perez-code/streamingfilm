//Traer el servicio
import { userService } from "../services/userServices";

export const userController = {
    async getUsers(res) {
        try{
            const users = await userService.getAllUsers();
            res.status(200).json({
                sucess: true,
                data: users
        })
        }catch(error){
            res.status(500).json({
                sucess: false,
                message: error.message
            })
        }
    },

    async createUser(req, res) {
        try {
            const {email, name} = req.body;
            //Validacion basica
            if (!email || !name) {
                return res.status(400).json({
                    sucess: false,
                    message: "Email y Nombre son obligatorios"
                });
            }
            const newUser = await userService.createUser({email, name});
            res.status(201).json({
                sucess: true,
                data: newUser,
                message: "Usuario creado exitosamente"
            });
        } catch (error) {
            res.status(500).json({
                sucess: false,
                message: error.message
            });
        }
    }
}