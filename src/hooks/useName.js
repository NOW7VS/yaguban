import { useState } from 'react';

const useName = () => {
    const [name, setName] = useState(''); // 이름 저장
    const [nameError, setNameError] = useState(false); // 이름에 오류 판별
    const [nameHelperText, setNameHelperText] = useState(''); // 이름 밑에 helpertext
    
  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
    setNameHelperText('');
  };

  return { name, nameError, setNameError, nameHelperText, setNameHelperText, handleNameChange };
};

export default useName;
