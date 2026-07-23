//require('dotenv').config()
import dotenv from "dotenv";

dotenv.config();
import connectDB from './db/index.js'
console.log(process.env.PORT)

connectDB();