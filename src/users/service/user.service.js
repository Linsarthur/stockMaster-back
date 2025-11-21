import prisma from "../../commons/prisma/index.js"
import bcrypt from "bcrypt"
import { randomInt } from "node:crypto"


const randomSalt = randomInt(10, 16);


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

export const createUser = async (req, res) => {
    const { user_email, user_name, user_password } = req.body
    const passwordCrypt = await bcrypt.hash(user_password, randomSalt)


    try {
        await prisma.users_table.create({
            data: {
                user_email,
                user_password: passwordCrypt,
                user_name
            }

        })
        return res.json("Dado inserido com sucesso!")
    } catch (error) {
        return res.json(error.message)
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params
    const { user_email, user_name, user_password } = req.body
    const passwordCrypt = await bcrypt.hash(user_password, randomSalt)
    try {
        await prisma.users_table.update({
            where: {
                user_id: Number(id)
            },
            data: {
                user_email,
                user_password: passwordCrypt,
                user_name
            }
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

export const login = async (req, res) => {
    const { user_email, user_password } = req.body
    const passwordCrypt = await bcrypt.hash(user_password, randomSalt)
    const checkedPassword = await bcrypt.compare(user_password, passwordCrypt)

    try {
        const user = await prisma.users_table.findFirst({
            where: {
                user_email,

            }
        })
        if (!user) {
            return res.status(400).json("Email e/ou senha incorretos! Tente novamente.")
        }
        if (!checkedPassword) {
            return res.status(400).json("Email e/ou senha incorretos! Tente novamente2.")

        }
        return res.status(200).json("Logado com sucesso")
    } catch (error) {
        res.status(500).json(error.message)

    }

}