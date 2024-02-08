import styled from '@emotion/styled';
import { FormControl, InputLabel,Input, Typography, FormGroup,Button } from '@mui/material';
import React, { useState,useEffect } from 'react'
import { editUser,getUser } from '../service/Api';
import {useNavigate,useParams} from  'react-router-dom'


const Container = styled(FormGroup)`
width:50%;
margin:10% auto 0 auto;
& > div {
  margin-top:20px;
}
`

const defaultValue ={
  firstname:'',
  lastname:'',
  email:'',
  phone:''
}


 const EditUser = () => {

  const [user,setUser]=useState(defaultValue)
  const navigate = useNavigate()
  const {id}=useParams();

  useEffect(()=>{
    loadUserDetails();
  },[])


  const loadUserDetails = async() =>{
    const response = await getUser(id);
    setUser(response.data);
  }

  const onValueChange=(e) => {
  console.log(e.target.name,e.target.value);
  setUser({...user,[e.target.name]:e.target.value});
  console.log(user)
  }

  const editUserDetails=async() => {
   await editUser(user,id);
   navigate('/all')
  }


  return (
<Container>
  <Typography variant='h4'>Edit User</Typography>
<FormControl>
  <InputLabel>Firstname</InputLabel>
  <Input onChange={(e)=>{onValueChange(e)}} name='firstname' value={user.firstname} />
</FormControl>
<FormControl>
  <InputLabel>Lastname</InputLabel>
  <Input onChange={(e)=>{onValueChange(e)}} name='lastname' value={user.lastname}/>
</FormControl>
<FormControl>
  <InputLabel>Email</InputLabel>
  <Input onChange={(e)=>{onValueChange(e)}} name='email' value={user.email}/>
</FormControl>
<FormControl>
  <InputLabel>Phone</InputLabel>
  <Input onChange={(e)=>{onValueChange(e)}} name='phone' value={user.phone}/>
</FormControl>
<FormControl>
  <Button variant="contained" onClick={()=>{editUserDetails()}}>Edit User</Button>
</FormControl>
</Container>
    )
}

export default EditUser;