import express from 'express'; 
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import { mongoURI } from "./config/database";
import bucketRouter from "./app/routes/bucket.router";

const app = express();

//database
mongoose.connect(mongoURI, {
    useNewUrlParser:true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(res => { console.log("Database Connected"); })
.catch(error => { console.log(error); });

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api", bucketRouter);

//static

export default app;