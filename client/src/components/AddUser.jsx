import styled from '@emotion/styled';
import { FormControl, InputLabel,Input, Typography, FormGroup,Button } from '@mui/material';
import React, { useState } from 'react'
import { addUser } from '../service/Api';
import {useNavigate} from  'react-router-dom'


const Container = styled(FormGroup)`
width:50%;
margin:10% auto 0 auto;
& > div {
  margin-top:20px;
}
`

const defaultValue ={
  Firstname:'',
  Lastname:'',
  Email:'',
  Phone:''
}


 const AddUser = () => {

  const [user,setUser]=useState(defaultValue)
  const navigate = useNavigate()

  const onValueChange=(e) => {
  console.log(e.target.name,e.target.value);
  setUser({...user,[e.target.name]:e.target.value});
  console.log(user)
  }

  const addUserDetails=async() => {
   await addUser(user);
   navigate('/all')
  }


  return (
<Container>
  <Typography variant='h4'>Add User</Typography>
<FormControl>
  <InputLabel>Firstname</InputLabel>
  <Input onChange={(e)=>{onValueChange(e)}} name='firstname' />
</FormControl>
<FormControl>
  <InputLabel>Lastname</InputLabel>
  <Input onChange={(e)=>{onValueChange(e)}} name='lastname' />
</FormControl>
<FormControl>
  <InputLabel>Email</InputLabel>
  <Input onChange={(e)=>{onValueChange(e)}} name='email'/>
</FormControl>
<FormControl>
  <InputLabel>Phone</InputLabel>
  <Input onChange={(e)=>{onValueChange(e)}} name='phone'/>
</FormControl>
<FormControl>
  <Button variant="contained" onClick={()=>{addUserDetails()}}>Add User</Button>
</FormControl>
</Container>
    )
}

export default AddUser;