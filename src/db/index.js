
import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

const connectDB= async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DBNAME}`)
        console.log('connected DB')
        //console.log(connectionInstance)


    } catch (error) {
        console.log(`mongo db connection error`)
        process.exit(1);
    }
}

export default connectDB;