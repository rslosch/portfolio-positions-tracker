import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { Link } from 'react-router-dom'

function NavBar({ loggedIn, logoutUser }) {

  const logout = e => {
    e.preventDefault()
    logoutUser()
    localStorage.removeItem('user_id')
  }

  const loggedInLinks = () => {
    return (
      <>
        <Button color="inherit" to='/' component={ Link }>Home</Button>
        <Button color="inherit" to='/investments' component={ Link }>View Investments</Button>
        <Button color="inherit" to='/investments/new' component={ Link }>Add New Investment</Button>
        <Button color="inherit" onClick={logout}>Logout</Button>
      </>
    )
  }

  const loggedOutLinks = () => {
    return (
      <>
        <Button color="inherit" to='/login' component={ Link }>Login</Button>
        <Button color="inherit" to='/signup' component={ Link }>Signup</Button>
      </>

    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Investment Portfolio
                </Typography>
                <>
                  { loggedIn ? loggedInLinks() : loggedOutLinks() }
                </>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar