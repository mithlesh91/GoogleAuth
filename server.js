import dotenv from "dotenv"
dotenv.config()

import app from "./src/app.js";

app.listen(3000,(req,res)=>{
    console.log("server is runing port 300")
})