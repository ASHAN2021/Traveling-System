import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();


const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("mongodb connection sucess!!!");
});

app.listen(PORT,()=>{
    console.log(`server is up and running on port ${PORT}` );
});

