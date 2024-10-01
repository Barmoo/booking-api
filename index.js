import express from "express"
import { bookingRouter } from "./routes/all-routes.js";


const app = express();
const PORT = 3001
app.use(bookingRouter);


app.listen(PORT,() => console.log(`server is Listening on ${PORT}`))