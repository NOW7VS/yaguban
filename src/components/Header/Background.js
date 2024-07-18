import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import useIsHomePage from '../../hooks/useIsHomePage';
import './Background.css'; // CSS 파일을 import 합니다.

const Background = () => {
  const isHomePage = useIsHomePage();
  const [animateClass, setAnimateClass] = useState('');

  useEffect(() => {
    if (isHomePage) {
      setAnimateClass('background-expand');
    } else {
      setAnimateClass('background-shrink');
    }
  }, [isHomePage]);

  return (
    <Box
      className={animateClass}
      sx={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        overflow: 'hidden', // 넘치는 부분 숨기기
      }}
    >
      <Box
        component="img"
        src="/background.jpg"
        alt="Background"
        sx={{ 
          width: '100%', 
          height: '100%', // 부모 박스의 높이를 채우기 위해 100%로 설정
          display: 'block',
          objectFit: 'cover', // 이미지 비율 유지하면서 박스 크기에 맞추기
          objectPosition: 'top', // 이미지의 상단을 박스 상단에 맞추기
          filter: isHomePage ? 'none' : 'blur(1px)',
        }}
      />
    </Box>
  );
};

export default Background;
