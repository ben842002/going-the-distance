import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="40px">
        <Stack direction="row" alignItems="center">
          <img src={Logo} alt="logo" width="60px" height="60px" />

          <Typography ml="25px" variant="h5" fontWeight="600">
            Going the Distance
          </Typography>
        </Stack>
        
        <Typography variant="h5" pb="40px" mt="5px">
          Made by Benjamin Chau
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer