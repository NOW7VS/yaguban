import { useLocation } from 'react-router-dom';

const useIsHomePage = () => {
  const location = useLocation();
  
  // 홈 페이지 경로를 설정합니다. 필요에 따라 변경할 수 있습니다.
  const homePath = '/home';

  // 현재 경로가 홈 페이지 경로와 일치하는지 확인합니다.
  return location.pathname === homePath;
};

export default useIsHomePage;
