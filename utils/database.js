import mongoose from "mongoose";

let isConnected = false

export const connectDB = async()=>{
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log('mongoDB is already connected')
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'share_prompts',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected= true
        console.log('Connected to MongoDb successfully')

    } catch (err) {
        console.log(err)
    }
}