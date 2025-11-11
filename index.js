import express from "express"
import { userRoutes } from "./src/routes/usersRoutes.js";
const app = express();
const port = 3000;


app.use("/", userRoutes)

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);

})