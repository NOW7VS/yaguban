import { useState } from 'react';

const useEmail = () => {
  const [email, setEmail] = useState(''); // email 저장
  const [emailError, setEmailError] = useState(false); // 이메일에 오류 판별
  const [emailHelperText, setEmailHelperText] = useState(''); // 이메일 밑에 helpertext
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
    setEmailHelperText('');
  };

  return { email, emailError, setEmailError, emailHelperText, setEmailHelperText, handleEmailChange };
};

export default useEmail;
