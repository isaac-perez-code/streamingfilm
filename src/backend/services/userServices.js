import {PrismaClient } from '@prisma/client';

const prisma = new PrismaClient;

export const userService ={
    //Crear usuarios
    async createUser(data){
        try{
            const {email, name} = data;
            return await prisma.user.create({
                data :{email, name}
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
            throw error ('Error al obtener usuarios' + error.message);
        }
    },

    //Actualizar usuarios
    async updateUser(id, data){
        try{
            const user = await prisma.user.findUnique({
                where: { id: parseInt(id) }
            });
            
            if (!user) {
                throw new Error('Usuario no encontrado');
            }

            // Si se intenta actualizar el email, verificar unicidad
            if (data.email) {
                const existing = await prisma.user.findUnique({
                    where: { email: data.email }
                });

                if (existing && existing.id !== parseInt(id)) {
                    // Simular el código de error de Prisma para que el controlador lo trate como conflicto
                    const err = new Error('Unique constraint failed on the fields: (`email`)');
                    err.code = 'P2002';
                    throw err;
                }
            }

            return await prisma.user.update({
                where: { id: parseInt(id) },
                data: data
            });
        }catch(error){
            const err = new Error('Error al actualizar usuario: ' + error.message);
            if (error.code) err.code = error.code;
            throw err;
        }
    }
}
