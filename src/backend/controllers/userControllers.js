import  {userService} from '../services/userServices.js';

export const userControllers = {
    async getUsers(req, res){
        try{
            const users = await userService.getAllUsers();
            res.status(200).json({
                success: true,
                data: users
            })
        }catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    async createUser (req, res){
        try{
            const {email, name}= req.body;
            //Validacion basica
            if(!email || !name){
                return res.status(400).json({
                    success: false,
                    message:'Email y nombre son obligatorios'
                });
            }
            const newUser = await userService.createUser({email, name});
            res.status(201).json({
                success: true,
                data: newUser,
                message: 'Usuario creado correctamente'
            });
        }catch(error){
            res.status(500).json({
                success:false,
                message:error.message
            });
        }
    },

    async updateUser(req, res){
        try{
            const { id } = req.params;
            const { email, name } = req.body;

            // Validación básica
            if (!email && !name) {
                return res.status(400).json({
                    success: false,
                    message: 'Debe proporcionar email o name para actualizar'
                });
            }

            const updateData = {};
            if (email) updateData.email = email;
            if (name) updateData.name = name;
            
            const updatedUser = await userService.updateUser(id, updateData);
            res.status(200).json({
                success: true,
                data: updatedUser,
                message: 'Usuario actualizado correctamente'
            });
        }catch(error){
            if (error.message.includes('no encontrado')) {
                return res.status(404).json({
                    success: false,
                    message: error.message
                });
            }
            // Manejar error de restricción única de Prisma (p.ej. email duplicado)
            if (error.code && error.code === 'P2002') {
                return res.status(409).json({
                    success: false,
                    message: 'Email ya existe. Conflicto de recurso.'
                });
            }
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    //nuevo metodo deleteUser
    async deleteUser(req, res){
        try{
            const { id } = req.params;
            await userService.deleteUser(id);
            res.status(200).json({
                success: true,
                message: 'Usuario eliminado correctamente'
            });
        }catch(error){
            if (error.message.includes('no encontrado')) {
                return res.status(404).json({
                    success: false,
                    message: error.message
                });
            }
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
};