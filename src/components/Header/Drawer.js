import React from 'react';
import { Drawer as MuiDrawer, MenuItem, Button, Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

function Drawer({ open, toggleDrawer, menuItems}) {
  return (
    <MuiDrawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          minWidth: '60dvw',
          p: 2,
          backgroundColor: 'background.paper',
          flexGrow: 1,
        }}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.text} component={Link} to={item.path}>
            {item.text}
          </MenuItem>
        ))}
        <Divider />
        <MenuItem>
          <Button
            color="primary"
            variant="outlined"
            component={Link}
            to="/sign-in"
            sx={{ width: '100%' }}
          >
            로그인
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/sign-up"
            sx={{ width: '100%' }}
          >
            회원가입
          </Button>
        </MenuItem>
      </Box>
    </MuiDrawer>
  );
}

export default Drawer;
