import React from 'react';
import { Box, Container } from '@mui/material';
import SignUp from '../components/sign/SignUp';

const SignUpPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px', // 원하는 padding 값으로 설정
        width: '100%',
        height: '100vh', // 뷰포트 전체 높이를 채움
        boxSizing: 'border-box', // padding과 border를 포함하여 box 크기를 설정
      }}
    >
      <Container maxWidth="md"   
      sx={{
        padding: '20px', // 원하는 padding 값으로 설정
        margin: 0, // margin을 제거
        boxSizing: 'border-box', // padding과 border를 포함하여 box 크기를 설정
      }}
      >
        <SignUp />
      </Container>
    </Box>

  );
};

export default SignUpPage;
