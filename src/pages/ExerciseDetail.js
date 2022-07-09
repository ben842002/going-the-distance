import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // for the id of the exercise we are on
import { Box } from '@mui/material';
import { youtubeOptions, exerciseOptions, fetchData} from '../utils/fetchData';

import Detail from '../components/ExerciseDetailPage/Detail';
import ExerciseVideos from '../components/ExerciseDetailPage/ExerciseVideos';
import SimilarExercises from '../components/ExerciseDetailPage/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      // access APIs
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
    }

    fetchExercisesData();
  }, []);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail