import express, { urlencoded } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todos.js"

const app = express();
dotenv.config();

const MongoURL = `mongodb+srv://MongoUser:${process.env.MongoPass}@miprimercluster.ge1xm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(MongoURL);

app.use(express.json({limit: "30mb",extended: true}));
app.use(urlencoded({limit: "30mb",extended: true}));

const Port = process.env.Port || 8000;

app.get('/',(req,res) => {
    res.send("Servidor corriendo...")
});

app.use(cors());
app.use('/todos', todoRoutes);

mongoose.connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => app.listen(Port), 
    () => console.log(`Server running on ${Port}`),
    () => console.log("Corriendo"))
    .catch((error) => console.log(error));
