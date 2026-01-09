import { Router } from "express";
import { callBatch, createBatch, deleteBatch, editBatch } from "../service/batch.service.js";

const router = Router();

router.post("/create", createBatch);
router.get("/", callBatch)
router.put("/update/:id", editBatch)
router.delete("/delete/:id", deleteBatch)

export { router as batchRoutes }