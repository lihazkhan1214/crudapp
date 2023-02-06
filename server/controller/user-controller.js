import user from "../usershema/userschema.js";

export  const addUser=async(req,res)=>{
 const newuser=req.body;
 const data=new user(newuser);
 try{
       await data.save();
       res.status(202).json(data);
 }
 catch(err){
  res.status(409).json({msg:"error"});
 }
}
export  const getUsers=async(req,res)=>{
  try{
const users=await user.find();
       
        res.status(200).json(users);
  }
  catch(err){
   res.status(404).json({msg:"error"});
  }
 };
 export  const getUser=async(req,res)=>{

      try{
//     const data=await user.find({_id:req.params.id});

      const data=await user.findById(req.params.id);
           
            res.status(200).json(data);
            console.log(data)
      }
      catch(err){
       res.status(404).json({msg:"error get in api "});
      }
     };
     export  const editUser=async(req,res)=>{
          const data=req.body;
          console.log(data)
      //     const edituser=new user(data);
      //     console.log(edituser)
      try{
              await user.updateOne({_id:req.params.id},data);
              res.status(201).json(data);
      }
      catch(err){
       res.status(409).json({msg:"error get in api "});
      }
     };
     export const deleteUser = async (request, response) => {
      try{
          await user.deleteOne({_id: request.params.id});
          response.status(201).json("User deleted Successfully");
      } catch (error){
          response.status(409).json({ message: error.message});     
      }
  }