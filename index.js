import express from "express"
import { usersRoutes } from "./src/users/controller/user.controller.js";


const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", usersRoutes)



app.listen(port, () => {
    console.log(`Server runing on port ${port}`);

})