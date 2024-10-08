import express from "express"
import mongoose from "mongoose";
import { bookingRouter } from "./routes/all-routes.js";
import 'dotenv/config'
import cors from 'cors'




await mongoose.connect (process.env.MONGO_URI);


const app = express();
const PORT = 3001
app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(bookingRouter);



app.listen(PORT,() => console.log(`server is Listening on ${PORT}`))