import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SignIn from '../components/Sign/SignIn';

const HomePage = () => {
  return (
    <Container> {/* 좌우 패딩 24px */}
      <SignIn/>
    </Container>
  );
};

export default HomePage;
