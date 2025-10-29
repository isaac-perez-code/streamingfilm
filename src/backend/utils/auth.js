import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

//hashear pass
export const hashPassword = async(password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

//comparar pass
export const comparePassword = async (password, hashpassword) =>{
    return await bcrypt.compare(password, hashpassword);
};

//Generar token
export const generateToken = (userId, email) =>{
    return jwt.sign(
        {id: userId, email},
        {expiresIn: process.env.JWT_EXPIRES_IN || "3d"}
    );
};
//Verificar JWT
export const verifyToken = (token) =>{
    try {
        return jwt.verify(token. process.env.JWT_SECRET);
    }catch(error){
        return null;
    }
};
    