
import { TextField, FormGroup ,styled,Typography ,Button } from '@mui/material';
import { useState } from 'react';
import { addUser } from './service/Api';
import { useNavigate } from 'react-router-dom';
const FormControl=styled(FormGroup)`
display:block;
margin-left:300px;
& > div margin-top:30px;



`;

const defualtvalue={
  name:"",
  username:"",
  email:"",
  phone:""
};


function AddUser() {
  const navigate=useNavigate();
const [data, setdata] = useState(defualtvalue)

  const onValueChange=(e)=>{
    const {name,value}=e.target;
  
    setdata({...data,[name]:value});
  }
  const adduserdetails=async()=>{

await  addUser(data);

navigate("/all")

  }
  return (
  <>
  <container>
  <Typography varient="h1">Add user</Typography>
  <FormControl>
  <TextField id="standard-basic"  name="name" label="name" onChange={onValueChange} variant="standard" />

  
   </FormControl>
  
   <FormControl>
   <TextField id="standard-basic" name="username" label="username" onChange={onValueChange} variant="standard" />
    </FormControl>
    <FormControl>
    <TextField id="standard-basic"  name="email" label="email" onChange={onValueChange} variant="standard" />
     </FormControl>
     <FormControl>
     <TextField id="standard-basic"  name="phone" label="phone"  onChange={onValueChange} variant="standard" />
      </FormControl>
<FormControl>

<Button variant="contained" onClick={adduserdetails}>Add user</Button>

</FormControl>
</container>
  
  
  </>
  )
}

export default AddUser
