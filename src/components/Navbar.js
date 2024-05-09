import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';

function Navbar({ onMessagesIconClick }) {
  // Retrieve user email from localStorage
  const userEmail = localStorage.getItem('userEmail');

  return (
    <AppBar position="static">
      <Toolbar>
        {/* UNIBOARD text on the left, wrapped with Link */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/search-page" style={{ textDecoration: 'none', color: 'inherit' }}>
            UNIBOARD
          </Link>
        </Typography>

        {/* User email */}
        <Typography variant="body1" sx={{ marginRight: 2 }}>
          {userEmail}
        </Typography>

        {/* Messages icon */}
        <IconButton color="inherit" onClick={onMessagesIconClick}>
          <MailIcon />
        </IconButton>

        {/* Profile icon */}
        <Link to='/profile-page' style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;