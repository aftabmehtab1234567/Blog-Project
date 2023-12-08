import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const Image = styled(Box)`
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center; /* Fix the typo here */
  justify-content: center;
  flex-direction: column;
`;

export default function Banner() {
  return (
    <Image>
      <Typography variant="h4" color="primary">Blog</Typography>
      <Typography variant="h6" color="primary">Code for interview</Typography>
    </Image>
  );
}
