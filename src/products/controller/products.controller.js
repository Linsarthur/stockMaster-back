import { Router } from "express";
import { createProduct } from "../service/products.service.js";

const router = Router()

router.post("/create", createProduct)

export { router as productsRoutes }