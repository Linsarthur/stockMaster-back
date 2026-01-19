import prisma from "../../commons/prisma/index.js"

export const createProduct = async (req, res) => {
    const { product_name, product_price, product_discount, batch_idfk, category_idfk, product_amount } = req.body

    try {
        const newProduct = await prisma.products.create({
            data: {
                product_name,
                product_amount,
                product_price: parseFloat(product_price),
                product_discount: product_discount ? parseFloat(product_discount) : null,
                category_idfk,
                batch_idfk
            }
        })
        return res.json({
            message: "Dado inserido com sucesso",
            product: newProduct
        }

        )
    } catch (error) {
        return res.json(error.message)
    }
}


export const getOnlyOneProduct = async (req, res) => {
    const { id } = req.params
    try {
        const products = await prisma.products.findUnique({
            where: { product_id: parseInt(id) },
            include: { category: true, batch: true }
        })
        if (!products) {
            return res.status(404).json({ message: "Produto não encontrado" })
        }
        res.status(200).json({
            message: "Success",
            products
        })
    } catch (error) {
        res.status(500).json({ message: "Não achei", errorMessage: error.message })
    }
}