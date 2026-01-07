import { Router } from "express";
import { createUser, deleteUser, getUser, getUserById, login, logout, updateUser } from "../service/user.service.js";
import verifyJWT from "../../middlewares/token/jsonWebToken.js";

const router = Router();

router.get("/", verifyJWT, getUser)
router.get("/:id", verifyJWT, getUserById)
router.post("/", createUser)
router.post("/login", login)
router.post("/logout", verifyJWT, logout)
router.put("/:id", verifyJWT, updateUser)
router.delete("/:id", verifyJWT, deleteUser)



export { router as usersRoutes }