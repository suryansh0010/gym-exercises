import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', p: 2 }}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          sx={{ flex: '0 0 auto' }} 
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScrollbar;
