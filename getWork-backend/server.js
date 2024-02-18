import 'dotenv/config'
import express from "express";
import mongoose from "mongoose";

const app = express();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
}
app.listen(8000, () => {
    connect();
    console.log("Backend Server is running!!");
})