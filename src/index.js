import { HOST, PORT } from "./config.js"
import app from "./app.js"

app.listen(PORT)


console.log("Server is running in the port ", PORT)
console.log("Server is located in the host ", HOST)
