import { Router } from "express";
import { createUser, deleteUser, getUser, getUserById, login, logout, updateUser } from "../service/user.service.js";

const router = Router();

router.get("/", getUser)
router.get("/:id", getUserById)
router.post("/", createUser)
router.post("/login", login)
router.post("/logout", logout)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)



export { router as usersRoutes }