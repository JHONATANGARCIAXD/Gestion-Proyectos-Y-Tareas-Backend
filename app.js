import express from "express"
import mongoose from "mongoose"
import Categories from "./routers/categories.js"
import 'dotenv/config';
import States from "./routers/states.js";
import Users from "./routers/users.js";


const app = express()

app.use(express.json())
app.use("/api/categories", Categories)
app.use("/api/states", States)
app.use("/api", Users)

mongoose.connect(process.env.MONGO_CNX)
    .then(() => console.log("SE CONECTO A MONGODB"))
    .catch(err => console.error("Error al conectar a MongoDB:", err));

app.listen(5000, () => {
    console.log(`SERVIDOR ESCUCHANDO CORRECTAMENTE`);
})
