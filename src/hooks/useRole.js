import { useState } from 'react';

const useRole = () => {
  const [role, setRole] = useState('player'); // 기본값을 'player'로 설정

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return { role, handleRoleChange };
};

export default useRole;
