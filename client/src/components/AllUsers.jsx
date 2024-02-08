
import { useEffect,useState } from 'react';
import { getUsers,deleteUser } from '../service/Api';
import {Table, TableHead, TableBody, TableRow, TableCell,styled, Button } from '@mui/material';

import {Link } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';


const StyledTable =styled(Table)`
width:700px;
margin:80px auto 0 auto;
`

const THEAD = styled(TableRow)`
background-color:#4A235A;
& > th{
  color: white;
  font-size:25px;

}
`;
const TBODY = styled(TableRow)`
&>td{
  font-size:20px;
}
`

const AllUsers = () => {
  const [users, setUsers] = useState([]);


useEffect(() =>{
  getAllUsers();

},[]);

const getAllUsers = async() =>{
   let response =await getUsers();
   setUsers(response.data);
}


const deleteUserDetails = async(id) =>{
  await deleteUser(id);
  getAllUsers();
}

  return (
    
    <StyledTable>
      <TableHead>
        <THEAD>
          <TableCell>Id</TableCell>
          <TableCell>Firstname</TableCell>
          <TableCell>Lastname</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>


          </THEAD>
      </TableHead>
      <TableBody>
        {
          users.map(user =>(
            <TBODY key={user._id }>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.firstname}</TableCell>
              <TableCell>{user.lastname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell><Button  variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`} >Edit</Button></TableCell><TableCell>
              <Button  variant='contained' color='secondary'  onClick={()=>deleteUserDetails(user._id)}>Delete</Button></TableCell>


            </TBODY>
          ))
        }
     </TableBody>
     </StyledTable>
)
}

export  default AllUsers