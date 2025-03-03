import React from 'react';
import { Stack } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '', 
        backgroundColor: bodyPart === item ? '#fff' : '',
        borderBottomLeftRadius: bodyPart === item ? '20px' : '',
        width: bodyPart === item ? '270px' : '',
        height: bodyPart === item ? '280px' : '',
        cursor: bodyPart === item ? 'pointer' : '',
        gap: bodyPart === item ? '47px' : '',
      }}
      onClick={() => setBodyPart(item)}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }}/>
    </Stack>
  );
};

export default BodyPart;
