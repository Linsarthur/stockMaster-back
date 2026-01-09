import { Router } from "express";
import { createRole, getRole } from "../service/roles.service.js";

const router = Router()

router.post("/create", createRole)
router.get("/", getRole)

export {router as roleRoutes}