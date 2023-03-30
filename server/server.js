import express from 'express';
import {readdirSync} from 'fs';
import cors from 'cors'
import mongoose from "mongoose";
mongoose.set('strictQuery', true);
const morgan  =require ("morgan")
require("dotenv").config();

const app =express();



app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


mongoose
    .connect('mongodb://user:user123@ac-bypn2ds-shard-00-00.k4sr7lu.mongodb.net:27017,ac-bypn2ds-shard-00-01.k4sr7lu.mongodb.net:27017,ac-bypn2ds-shard-00-02.k4sr7lu.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-hmnhp8-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error',err));

readdirSync('./routes').map((r)=>app.use("/api",require(`./routes/${r}`)))

const port=process.env.PORT||8000;

app.listen(port,()=>console.log(`Server is running on port ${port}`))


