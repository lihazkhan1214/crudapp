import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
const app=express();
import connection from "./database/db.js";
import router from "./routes/router.js";
const port=8000;

connection();
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use(router);

app.listen(port,()=>{
    console.log("server is runing successfull");
});


