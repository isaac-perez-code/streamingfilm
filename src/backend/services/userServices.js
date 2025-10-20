import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const userService = {
    //Crear usuario
        async createUser(data){
        try{
            const {email, name} = data;
            return await prisma.user.create({
                data: {
                    email,
                    name
                }
            })
        }catch(error){
            throw new Error('Error al crear usuario' + error.message);
        }
    },

    //Obtener usuarios
    async getAllUsers(){
        try{
            return await prisma.user.findMany();
        }catch(error){
            throw new Error('Error al obtener usuarios' + error.message);
        }
    }
}