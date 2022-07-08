import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // for the id of the exercise we are on
import { Box } from '@mui/material';
import { exerciseOptions, fetchData} from '../utils/fetchData';

import Detail from '../components/ExerciseDetail/Detail';
import ExerciseVideos from '../components/ExerciseDetail/ExerciseVideos';
import SimilarExercises from '../components/ExerciseDetail/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({

  });

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      // access APIs
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    }

    fetchExercisesData();
  }, []);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail