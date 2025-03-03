import React from 'react'
import {Stack} from '@mui/material';
import Icon from '../assets/icons/gym.png'


const BodyPart = ({item,setBodyPart,BodyPart}) => {
  return (
    <Stack 
      type="button"
      alignItems='center'
      justifyContent="center"
      className='bodyPart-card'
      sx={{

      }}
    >
      <img src={Icon} alt='dumbbell' style={{width:'40px',height:'40px'}}/>
    </Stack>
  )
}

export default BodyPart
