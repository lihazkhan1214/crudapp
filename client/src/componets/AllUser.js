import React from 'react'
import {Table,Button} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Link } from 'react-router-dom';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getUsers ,deleteUser} from './service/Api';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AllUser() {
  const navigate=useNavigate();
const [users,setusers]=useState([]);

  useEffect(()=>{
      getallUsers();
  },[]);
  const getallUsers=async()=>{
 const res=await getUsers();
setusers(res.data);
  }
  const deleteuserDetails=async(id)=>{
   await deleteUser(id);

 navigate("/all");
  }
  return (
   <>
   
   
   <Table  aria-label="simple table">
   <TableHead>
     <TableRow>
       <TableCell>id</TableCell>
       <TableCell align="right">name</TableCell>
       <TableCell align="right">username</TableCell>
       <TableCell align="right">email</TableCell>
       <TableCell align="right">phone</TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
  {
    users.map(user=>(
      <TableRow ked={user._id}>
      <TableCell>{user._id}</TableCell>
      <TableCell align="right">{user.name}</TableCell>
      <TableCell align="right">{user.username}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.phone}</TableCell>
      <TableCell align="right">
      <Button variant="contained" style={{marginRight:"20px"}} color="secondary" LinkComponent={Link} to={`/edit/${user._id}`}>edit</Button>
      <Button variant="contained" onClick={()=>deleteuserDetails(user._id)}>delete</Button>
      </TableCell>
    </TableRow>
    ))
  }

   </TableBody>

   </Table>
   
   
   
   
   
   
   </>
  )
}

export default AllUser;