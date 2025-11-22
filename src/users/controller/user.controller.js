import { Router } from "express";
import { createUser, deleteUser, getUser, getUserById, login, logout, updateUser } from "../service/user.service.js";
import verifyJWT from "../../middlewares/token/jsonWebToken.js";

const router = Router();

router.get("/", getUser)
router.get("/:id", getUserById)
router.post("/", createUser)
router.post("/login", login)
router.post("/logout", verifyJWT, logout)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)



export { router as usersRoutes }