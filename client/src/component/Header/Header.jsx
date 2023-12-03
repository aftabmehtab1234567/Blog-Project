import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';  // Import Link

// Fix the typo in 'styled'
const StyledAppBar = styled(AppBar)`
  background: #ffffff;
  color: #000;
`;
const Nav = styled(Toolbar)`
  justify-content: center;
  & > a {
    padding: 20px;
    text-decoration: none;
  } 
`;

const Header = () => {
  return (
    <StyledAppBar>
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link> 
        <Link to='/login'>Logout</Link>
      </Nav>
    </StyledAppBar>
  );
}

export default Header;
