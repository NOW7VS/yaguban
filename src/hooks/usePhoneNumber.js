import { useState } from 'react';

const usePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [phoneNumberHelperText, setPhoneNumberHelperText] = useState('');

  const handlePhoneChange = (event) => {
    let value = event.target.value.replace(/[^0-9]/g, ''); // 숫자만 남기기

    if (value.length > 8) {
      value = value.slice(0, 8); // 최대 8자리 숫자만 남기기
    }

    if (value.length <= 4) {
      setPhoneNumber(`${value}`);
    } else {
      setPhoneNumber(`${value.slice(0, 4)} - ${value.slice(4, 8)}`);
    }
  };

  return { phoneNumber, phoneNumberError, setPhoneNumberError, phoneNumberHelperText, setPhoneNumberHelperText, handlePhoneChange };
};

export default usePhoneNumber;
