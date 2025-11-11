import prisma from "../services/index.js";
export async function getUsers() {
    try {
        const allUsers = await prisma.users_table.findMany();
        return allUsers
    } catch (error) {
        return error
    }

}