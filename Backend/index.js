
import express from "express";
const app = express();

import { randomDesserts } from "./data.js";
import cors from "cors"

app.use(cors())
app.get("/", (req, res)=>{
  res.json(randomDesserts)
})

app.listen(process.env.PORT || 8000, ()=> console.log(`Conectado!`))
