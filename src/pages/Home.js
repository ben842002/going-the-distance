import React, { useState } from 'react';
import { Box } from '@mui/material';

import SearchExercises from '../components/Home/SearchExercises';
import HeroBanner from '../components/Home/HeroBanner';
import Exercises from '../components/Home/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home