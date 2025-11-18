import { Router } from "express";
import { deleteUser, getUser, getUserById, login, postUser, updateUser } from "../service/user.service.js";

const router = Router();

router.get("/", getUser)
router.get("/:id", getUserById)
router.post("/", postUser)
router.post("/login", login)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)



export { router as usersRoutes }