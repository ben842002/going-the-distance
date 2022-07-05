import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { fetchData, exerciseOptions } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id="exercises"
      sx={{ mt: {lg: '50px '}}}
      mt="25px"
      p="20px"
    >
      <Typography variant="h3" mb="45px">
        Showing Results
      </Typography>

      <Stack 
      direction="row" 
      sx={{ gap: { lg: '110px', xs: '50px'}}}
      flexWrap="wrap"
      justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises