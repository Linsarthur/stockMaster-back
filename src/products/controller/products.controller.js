import { Router } from "express";
import { createProduct, getOnlyOneProduct } from "../service/products.service.js";

const router = Router()

router.post("/create", createProduct)
router.get("/:id", getOnlyOneProduct)

export { router as productsRoutes }