
import { TextField, FormGroup ,styled,Typography ,Button } from '@mui/material';
import { useState ,useEffect} from 'react';
import { editUser, getUser } from './service/Api';
import { useNavigate,useParams } from 'react-router-dom';
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


function EditUser() {
  const {id}=useParams();
  const navigate=useNavigate();
const [data, setdata] = useState(defualtvalue)

  const onValueChange=(e)=>{
    const {name,value}=e.target;
  
    setdata({...data,[name]:value});
  }
  const edituserdetails=async()=>{

await  editUser(data,id);


navigate("/all")

  }
useEffect(()=>{
loadUserdetails();
},[]);
const loadUserdetails=async()=>{
  const response=await getUser(id);
  setdata(response.data)
}
const {name,username,email,phone}=data;


  return (
  <>
  <container>
  <Typography varient="h1">edit user</Typography>
  <FormControl>
  <TextField id="standard-basic"  name="name" label="name" onChange={onValueChange} variant="standard" value={name} />

  
   </FormControl>
  
   <FormControl>
   <TextField id="standard-basic" name="username" label="username" onChange={onValueChange} variant="standard" value={username} />
    </FormControl>
    <FormControl>
    <TextField id="standard-basic"  name="email" label="email" onChange={onValueChange} variant="standard" value={email}/>
     </FormControl>
     <FormControl>
     <TextField id="standard-basic"  name="phone" label="phone"  onChange={onValueChange} variant="standard" value={phone}/>
      </FormControl>
<FormControl>

<Button variant="contained" onClick={edituserdetails}>Edit user</Button>

</FormControl>
</container>
  
  
  </>
  )
}

export default EditUser
