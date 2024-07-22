import * as React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get('userId'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginY: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userId"
            label="ID"
            name="userId"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="ID 기억하기"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography component={Link} to="/findinfo" variant="body2" color="primary" sx={{ textDecoration: 'none' }}>
                ID/PW 찾기
              </Typography>
            </Grid>
            <Grid item>
              <Typography component={Link} to="/sign-up" variant="body2" color="primary" sx={{ textDecoration: 'none' }}>
                회원가입
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}