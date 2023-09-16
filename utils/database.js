import mongoose from 'mongoose';

let isConnected = false // track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDB already connected");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParse: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('MONGODB connected');
    } catch(err) {
        console.log(err);
    }
}