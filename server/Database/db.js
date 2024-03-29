import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const URL=`mongodb+srv://${username}:${password}@cluster0.sw3f28g.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true);

const Connection=async ()=>{
    try{
       await mongoose.connect(URL);
       console.log('connection successful')
    }catch(err){
        console.log('error with db connection',err.message);
    }
}

export default Connection;