import express from "express"
import { usersRoutes } from "./src/users/controller/user.controller.js";
import cors from "cors"
import { productsRoutes } from "./src/products/controller/products.controller.js";
import { categoryRoutes } from "./src/categories/controller/categories.controller.js";
import { batchRoutes } from "./src/batch/controller/batch.controller.js";


const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRoutes)
app.use("/products", productsRoutes)
app.use("/category", categoryRoutes)
app.use("/batch", batchRoutes)




app.listen(port, () => {
    console.log(`Server runing on port ${port}`);

})