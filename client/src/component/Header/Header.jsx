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

const Header = ({ isAuthenticated }) => {
  return (
    <StyledAppBar>
      <Nav>
        <Link to='/Home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        {isAuthenticated ? (
          <Link to='/logout'>Logout</Link>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </Nav>
    </StyledAppBar>
  );
}


export default Header;
