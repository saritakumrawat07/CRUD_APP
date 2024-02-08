import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
background : #4A235A
`;

const Tabs = styled(NavLink)`
font-size :20px;
margin-right:20px;
color : inherit;
text-decoration : inherit;`    //underline htane k liye


const Navbar = () => {
  return (
    
    <Header position='static'>
        <Toolbar>
<Tabs to='/'>Home</Tabs>
<Tabs  to='/all'>All Users</Tabs>
<Tabs to='/add'>Add User</Tabs>
        </Toolbar>
    </Header>
  )
}

export default Navbar;