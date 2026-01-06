import express from "express"
import { usersRoutes } from "./src/users/controller/user.controller.js";
import cors from "cors"
import { productsRoute } from "./src/products/controller/products.controller.js";

const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
app.use("/users", usersRoutes)
app.use("/products", productsRoute)



app.listen(port, () => {
    console.log(`Server runing on port ${port}`);

})