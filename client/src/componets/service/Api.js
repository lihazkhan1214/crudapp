
import axios from"axios";
const URL="http://localhost:8000";
export const addUser=async(data)=>{
  try{
 return await axios.post(`${URL}/add`,data);

  }
  catch(err){
    console.log(err)
  }
};
export const getUsers=async()=>{
  try{
 return await axios.get(`${URL}/all`);

  }
  catch(err){
    console.log(err)
  }
};
export const getUser=async(id)=>{
  try{
 return await axios.get(`${URL}/edit/${id}`);

  }
  catch(err){
    console.log(err)
  }
};
export const editUser=async(data,id)=>{
  try{
 return await axios.put(`${URL}/edit/${id}`,data);
 console.log("data updated",data);

  }
  catch(err){
    console.log(err)
  }
};
export const deleteUser=async(id)=>{
  try{
 return await axios.delete(`${URL}/${id}`);


  }
  catch(err){
    console.log(err)
  }
};