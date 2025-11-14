import express from "express"
import prisma from "./src/services/index.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/users", async (req, res) => {
    res.send(await prisma.users_table.findMany())
})

app.post("/users", async (req, res) => {
    const { user_name, user_email, user_phone, user_cpf, user_password } = req.body;
    try {
        const user = await prisma.users_table.create({
            data: {
                user_name,
                user_cpf,
                user_email,
                user_password,
                user_phone
            }
        })
        return res.json(user)
    } catch (error) {
        return res.json(error.message)
    }
})

app.get("/user/:id", async (req, res) => {
    const { id } = req.params
    try {
        const user = await prisma.users_table.findUnique({
            where: {
                user_id: Number(id),
            }
        })
        return res.json(user)
    } catch (error) {

        return res.json(error.message)
    }
})

app.put("/user/:id", async (req, res) => {
    const { id } = req.params
    const { user_name, user_email, user_phone, user_cpf, user_password } = req.body;

    try {
        const userUpdate = await prisma.users_table.update({
            where: {
                user_id: Number(id)
            },
            data: {
                user_name,
                user_cpf,
                user_email,
                user_password,
                user_phone
            }
        })
        return res.json(userUpdate)
    } catch (error) {
        return res.json(error.message)
    }
})

app.delete("/user/:id", async (req, res) => {
    const { id } = req.params
    const userDeleted = await prisma.users_table.delete({
        where: {
            user_id: Number(id)
        }
    })
    return res.json(userDeleted)
})

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);

})