import React from 'react'
import {Box,IconButton, Link, Typography} from '@mui/material'
import './footer.css'
import Logo from '../../assets/logo-2.png'
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import {TiSocialTwitter} from 'react-icons/ti'
import {SlSocialInstagram} from 'react-icons/sl'
const Footer = () => {
  return (
    <footer>
      <Box className='links'>
        <Box className='item-1'>
        <img width='100%' height={80} src={Logo} alt="Footer Logo" />
        <Box>
        <IconButton ><AiFillFacebook/></IconButton>
        <IconButton ><TiSocialTwitter/></IconButton>
        <IconButton ><AiFillLinkedin/></IconButton>
        <IconButton ><SlSocialInstagram/></IconButton>
        </Box>
        <Typography component='p'>Raqamyah Platform,352 Prince Muhammad ibn abd Ai Aziz,</Typography>
        <Typography component='p'>Al Augaither Commercial Center number 2.Al Olaya</Typography>
        <Typography component='p'>Riyadh 122411-6231</Typography>
        </Box>
        <Box className='item-2'>
        <Link href=''>Get Financed</Link>
        <Link href=''>Finance</Link>
        <Link href=''>Pos Finance</Link>
        <Link href=''>How it works</Link>
        <Link href=''>About</Link>
        <Link href=''>Contact us</Link>
        </Box>
        <Box className='item-3'>
        <Link href=''>legal</Link>
        <Link href=''>learn more as a financer</Link>
        <Link href=''>learn more as a financer(Debtor)</Link>
        <Link href=''>FAQ</Link>
        </Box>
        <Box className='item-4'>
          <Typography component='p'>Financing through Raqamyah platform involves financing to small and medium sized businesses, so your financed amount can go down as well as up.
</Typography>
          <Typography component='p'>Raqamyah Platform is licensed by the Saudi Central Bank.
</Typography>
          <Typography component='p'>For more information please. <span> click here</span></Typography>
        </Box>
      </Box>
      <Typography textTransform='uppercase' component='div' fontSize='12px'  textAlign='center' padding={3}>copyright raqamyah © {new Date().getFullYear()} All rights reserved. v-1.0.30</Typography>
    </footer>
  )
}

export default Footer