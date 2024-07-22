import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SignUp from '../components/Sign/SignUp';

const HomePage = () => {
  return (
    <Container> {/* 좌우 패딩 24px */}
      <SignUp/>
    </Container>
  );
};

export default HomePage;
