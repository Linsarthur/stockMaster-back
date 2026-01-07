import prisma from "../../commons/prisma/index.js"

export const createCategory = async (req, res) => {
    const { category_name, category_description } = req.body

    try {
        const category = await prisma.categories.create({
            data: {
                category_name,
                category_description
            }
        })
        if (category) {
            res.status(201).json({ message: "Categoria criada com sucesso" },
                category
            )
        }
    } catch (error) {
        res.status(500).json({ message: "Erro na criação de categoria" },
            error.message
        )
    }
}


export const callCategories = async (req, res) => {
    try {
        const categories = await prisma.categories.findMany({})
        if (categories) {
            res.status(200).json({
                categories
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}


export const editCategories = async (req, res) => {
    const { id } = req.params
    const { category_name, category_description } = req.body

    try {
        const category = await prisma.categories.update({
            where: {
                category_id: (Number(id))
            },
            data: {
                category_name,
                category_description
            }
        })
        if (category) {
            res.status(200).json({ message: "Categoria alterada com sucesso!", category })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteCategories = async (req, res) => {
    const { id } = req.params
    try {
        await prisma.categories.delete({
            where: {
                category_id: (Number(id))
            }
        })
        res.status(200).json({ message: "Categoria deletada com sucesso" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}