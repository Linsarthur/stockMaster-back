import prisma from "../../commons/prisma/index.js";

export const createRole = async (req, res) => {
    const { role_permisson, user_id } = req.body
    try {
        const data = { role_permisson }
        
        // Só adiciona user_id se foi fornecido
        if (user_id) {
            data.user_id = Number(user_id)
        }
        
        const createdRole = await prisma.roles.create({ data })
        
        res.status(200).json({ 
            message: "Role criada com sucesso", 
            createdRole 
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

export const getRole = async (req, res) => {
    try {
        const role = await prisma.roles.findMany({

        })
        res.status(200).json({ message: "Cargo criado com sucesso", role })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}