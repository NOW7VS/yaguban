import * as React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, FormControl, InputLabel, Select, InputAdornment, MenuItem, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useRole from '../../hooks/useRole';
import useName from '../../hooks/useName';
import useEmail from '../../hooks/useEmail';
import usePassword from '../../hooks/usePassword';
import usePhoneNumber from '../../hooks/usePhoneNumber';

export default function SignUp() {
  const { role, handleRoleChange } = useRole();
  const { name, nameError, setNameError, nameHelperText, setNameHelperText, handleNameChange } = useName();
  const { email, emailError, setEmailError, emailHelperText, setEmailHelperText, handleEmailChange } = useEmail();
  const { password, passwordError, setPasswordError, passwordHelperText, setPasswordHelperText,
    confirmPassword, confirmPasswordError, setConfirmPasswordError, confirmPasswordHelperText, setConfirmPasswordHelperText,
    handlePasswordChange, handleConfirmPasswordChange } = usePassword();
  const { phoneNumber, phoneNumberError, setPhoneNumberError, phoneNumberHelperText, setPhoneNumberHelperText, handlePhoneChange } = usePhoneNumber();

  const handleSubmit = (event) => {
    event.preventDefault();

    // 이름 유효성 검사
    if (!name) {
      setNameError(true);
      setNameHelperText('이름을 입력해주세요.');
      return;
    }

    // 이메일 유효성 검사
    if (!email) {
      setEmailError(true);
      setEmailHelperText('이메일을 입력해주세요.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError(true);
      setEmailHelperText('유효한 이메일 주소를 입력해주세요.');
      return;
    }

    // 전화번호 유효성 검사
    if (phoneNumber.length !== 11) { // 010-XXXX-XXXX 형식의 경우, 실제로 입력받는 것은 8자리
      setPhoneNumberError(true);
      setPhoneNumberHelperText('전화번호를 올바르게 입력해주세요.');
      return;
    }

    if (!password) {
      setPasswordError(true);
      setPasswordHelperText('비밀번호를 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText('비밀번호가 동일하지 않습니다');
      return;
    }

    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      role: data.get('role'),
      email: data.get('email'),
      phone: `010-  ${data.get('phone').replace(/ /g, '')}`, // 전화번호 앞에 010-을 붙여서 저장
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                label="Your Name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={handleNameChange}
                error={nameError}
                helperText={nameHelperText}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth required>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  value={role}
                  id="role"
                  label="Role"
                  name="role"
                  onChange={handleRoleChange}
                >
                  <MenuItem value="player">선수</MenuItem>
                  <MenuItem value="manager">매니저</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailHelperText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phone"
                label="Phone Number"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">010 -</InputAdornment>,
                }}
                error={phoneNumberError}
                helperText={phoneNumberHelperText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                helperText={passwordHelperText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={confirmPasswordError}
                helperText={confirmPasswordHelperText}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="이메일과 전화번호를 통한 광고성 메세지를 허용합니다."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            회원가입
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography component={Link} to="/sign-in" variant="body2" color="primary">
                로그인
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
