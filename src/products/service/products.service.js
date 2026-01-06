import prisma from "../../commons/prisma/index.js"

export const createProduct = async (req, res) => {
    const { product_name, product_price, product_discount, categoryRelation } = req.body

    try {
        const newProduct = await prisma.products.create({
            data: {
                product_name,
                product_price: parseFloat(product_price),
                product_discount: product_discount ? parseFloat(product_discount) : null,
                categoryRelation: {
                    connect: {
                        category_id: parseInt(categoryRelation)
                    }
                }
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