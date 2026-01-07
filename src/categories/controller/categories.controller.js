import { Router } from "express";
import { callCategories, createCategory, deleteCategories, editCategories } from "../service/categories.service.js";

const router = Router()

router.post("/create", createCategory)
router.get("/", callCategories)
router.put("/update/:id", editCategories)
router.delete("/delete/:id", deleteCategories)

export { router as categoryRouter }