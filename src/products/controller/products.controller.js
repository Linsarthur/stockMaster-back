import { Router } from "express";
import { createProduct,  deleteOneProduct,  getAllProdutcts, getOnlyOneProduct } from "../service/products.service.js";

const router = Router()

router.post("/create", createProduct)
router.get("/", getAllProdutcts)
router.get("/:id", getOnlyOneProduct)
router.delete("/delete/:id", deleteOneProduct)

export { router as productsRoutes }