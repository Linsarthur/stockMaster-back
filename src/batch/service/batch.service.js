import prisma from "../../commons/prisma/index.js"

export const createBatch = async (req, res) => {
    const { batch_number, batchproducts } = req.body
    try {
        const batchProducts = await prisma.batch.create({
            data: {
                batch_number
            }
        })
        res.json({ batchProducts })
    } catch (error) {
        res.json(error.message)
    }
}

export const callBatch = async (req, res) => {
    try {
        const batchs = await prisma.batch.findMany({})
        res.status(200).json(batchs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const editBatch = async (req, res) => {
    const { id } = req.paramns
    const { batch_number, batchproducts } = req.body
    try {
        const editedBatch = await prisma.batch.update({
            where: {
                batch_id: Number(id)
            }, data: {
                batch_number,
                batchproducts: {
                    create: batchproducts
                }
            },
            include: {
                batchproducts: true
            }

        })
        res.status(200).json({
            message: "Lote alterado com sucesso",
            editedBatch
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteBatch = async (req, res) => {
    const { id } = req.paramns

    try {
        const batch = await prisma.batch.delete({
            where: {
                batch_id: Number(id)
            }
        })
        res.status(200).json({
            message: "Lote deletado com sucesso",
            batch
        })
    } catch (error) {

    }
}