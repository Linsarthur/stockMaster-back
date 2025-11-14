import prisma from "../../commons/prisma/index.js"

export const getUser = async (req, res) => {
    res.send(await prisma.users_table.findMany())
}

export const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await prisma.users_table.findUnique({
            where: {
                user_id: Number(id)
            }
        })
        if (!user) {
            return res.json("User not found!")
        }
        return res.json(user)
    } catch (error) {
        return res.json(error.message)
    }
}

export const postUser = async (req, res) => {
    const data = req.body
    try {
        await prisma.users_table.create({
            data: data
        })
        return res.json("Dado inserido com sucesso!")
    } catch (error) {
        return res.json(error.message)
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await prisma.users_table.update({
            where: {
                user_id: Number(id)
            },
            data: data
        })
        return res.json("Dados alterados com sucesso")
    } catch (error) {
        return res.json(error.message)
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        await prisma.users_table.delete({
            where: {
                user_id: Number(id)
            }
        })
        return res.json("Dados excluidos com sucesso")
    } catch (error) {
        return res.json(error.message)
    }
}