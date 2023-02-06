import mongoose from "mongoose";

const connection=async()=>{
    const uri="mongodb+srv://welldatabase:well1214@cluster0.qva8alg.mongodb.net/crud?retryWrites=true&w=majority";
try{
    mongoose.set('strictQuery', false);
await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 });
console.log("connection is successfully");

}
catch(err){
    console.log("eror exist in datatabase connnecton")

}
}
export default connection;