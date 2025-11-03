import { NotBeforeError } from "jsonwebtoken";
import { authServices } from "../services/authServices.js";
import { generateToken } from "../utils/auth.js";

export const authControllers = {
    //Registro tradicional
    async register(req, res){
        try{
            const {email, name, password} = req.body;
            const result = await authServices.registerUser({email, name, password});

            res.status(201).json({
                succes: true,
                message: "Usuario registrado correctamente",
                data: result
            });
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            });
        }
    },

    //Google Callback
    async googleCallback(){
        try{
            const user = req.user;
            const token = generateToken (user.id, user.email);
            res.redirect(`http://localhost:5173/`) //URL del Frontend
        }catch(error){
            res.redirect(`http://localhost:5173/`); //Vista de frontend
        }
    }

}