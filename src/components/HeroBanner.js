import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/davidgoggins.webp';

const HeroBanner = () => {
  return (
    <Box 
    sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px' }
    }} 
    position="relative" p="20px"
    >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Going The Distance
        </Typography>

        <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '40px' }}} mb="23px" mt="15px">
            Wake Up, Get After It, <br /> and Repeat
        </Typography>

        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises <br /> for callusing your mind
        </Typography>

        <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#ff2625', padding: '10px'}}>Explore Exercises</Button>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" style={{zIndex:1}}/>

        <Typography 
            fontWeight={600} 
            color="#ff2625" 
            style={{zIndex:0}}
            sx={{ 
                fontSize: { xl: '100px', lg: '85px'},
                opacity: 0.1, 
                display: { lg: 'block', xs: 'none' },
                lineHeight: 1.25,
                marginTop: '100px'
            }}
        >
            IT PAYS TO BE A WINNER
        </Typography>
    </Box>
  )
}

export default HeroBanner