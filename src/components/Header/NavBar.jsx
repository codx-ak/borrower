import React from 'react'
import {Box, Link} from '@mui/material'
import './header.css'
import Logo from '../../assets/logo.png'
const NavBar = () => {
  return (
    <Box className='header'>
      <Box className='logo'>
        <img width='auto' height={70} src={Logo} alt="Logo Image" />
      </Box>
      <nav>
        <Link href=''>Get Financed</Link>
        <Link href=''>Finance</Link>
        <Link href=''>Pos Finance</Link>
        <Link href=''>How it works</Link>
        <Link href=''>About</Link>
        <Link href=''>Contact us</Link>
      </nav>
    </Box>
  )
}

export default NavBar