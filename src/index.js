import { PORT } from "./config.js";
import app from "./app.js";
import cors from "cors";

app.use(cors())

app.listen(PORT)


console.log("Server is running in the port ", PORT)
