import React from 'react';
import { AppBar, Toolbar, Button, Container, MenuItem, Typography, Box,} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './Drawer';
import menuItems from '../../data/Items';
import Background from './Background'; // Background 컴포넌트 임포트
import useToggleDrawer from '../../hooks/useToggleDrawer';

/* 로고 스타일 정의 */
const logoStyle = {
  width: '40px',
  height: 'auto',
  cursor: 'pointer',
  marginleft: '20px',
};

/* Header 컴포넌트 정의 */
function Header() {
  const [open, toggleDrawer] = useToggleDrawer();
  /* JSX */
  return (
    <div>
      {/* Background 컴포넌트 추가 */}
      <Background /> 
      {/* 상단에 고정된 앱 바 설정 */}
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent', //네비게이션 바 포함 상단 일부분 (밑에서 색 정의)
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        {/* 네비게이션 바 설정 */}
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: 'white', // 네비게이션 바의 색
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: `0 0 1px ${theme.palette.primary.main}20,
              1px 1.5px 2px -1px ${theme.palette.primary.main}30,
              4px 4px 12px -2.5px ${theme.palette.primary.main}80`,
            })}
          >
            {/* 로고와 메뉴 항목 포함 Box */}
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Box 
                component={Link}
                to="home"
                sx={{
                marginX: '10px',
                display: 'flex',
                alignItems: 'center',
                }}
              >
                <img
                  src={'./pegasus.png'}
                  style={logoStyle}
                  alt="logo of sitemark"
                />
              </Box>  
              <Typography variant="h6"
                component={Link}
                to="/home"
                sx={{
                  color: 'black',
                  mr: '10px',
                  textDecoration: 'none',
                  }}
              >
                Pegasus
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    component={Link}
                    to={item.path}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {item.text}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Button
                color="primary"
                variant="text"
                size="small"
              >
                로그인
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
              >
                회원가입
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer open={open} toggleDrawer={toggleDrawer} menuItems={menuItems} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
