import { useState } from 'react';

const usePassword = () => {
  const [password, setPassword] = useState(''); // 비밀번호 저장
  const [passwordError, setPasswordError] = useState(false); // 비밀번호 오류 판별
  const [passwordHelperText, setPasswordHelperText] = useState(''); // 비밀번호 밑에 helpertext
  const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 다시 입력 저장
  const [confirmPasswordError, setConfirmPasswordError] = useState(false); // 비밀번호 다시 입력 오류 판별
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState(''); // 비밀번호 다시 입력 밑에 helpertext
  
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    const passwordPattern = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/;
    if (!passwordPattern.test(value)) {
      setPasswordError(true);
      setPasswordHelperText('비밀번호는 8~32 자리의 알파벳과 숫자의 조합이며, 최소 하나의 특수문자가 포함되어야 합니다 (!@#$%^&*).');
    } else {
      setPasswordError(false);
      setPasswordHelperText('');
    }

    // 비밀번호가 변경될 때마다 확인 비밀번호와 일치하는지 확인
    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText('비밀번호가 동일하지 않습니다');
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordHelperText('');
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);

    if (password !== value) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText('비밀번호가 동일하지 않습니다');
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordHelperText('');
    }
  };

  return { password, setPassword, passwordError, setPasswordError, passwordHelperText, setPasswordHelperText,
    confirmPassword, setConfirmPassword, confirmPasswordError, setConfirmPasswordError, confirmPasswordHelperText, setConfirmPasswordHelperText,
    handlePasswordChange, handleConfirmPasswordChange
   };
};

export default usePassword;
