import React, { useState } from 'react'; // Removed duplicate import
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [ setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
      <Exercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
    </Box>
  );
};

export default Home;
