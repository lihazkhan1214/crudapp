import mongoose from "mongoose";
import auotIncrement from "mongoose-auto-increment";
const usersham=mongoose.Schema({
   name:String,
    username:String,
    email:String,
    phone:String
});

auotIncrement.initialize(mongoose.connection);
usersham.plugin(auotIncrement.plugin,"user");
const user=mongoose.model("user",usersham);
export default user;