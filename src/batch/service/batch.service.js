import prisma from "../../commons/prisma"

export const createBatch = async (req, res) => {
    const { batch_number, batchproducts } = req.body
    try {
        const batchProducts = await prisma.batch.create({
            data: {
                batch_number,
                batchproducts: {
                    create: batchproducts
                }
            },
            include: {
                batchproducts: true
            }
        })
        res.json({ batchProducts })
    } catch (error) {
        res.json(error)
    }
}