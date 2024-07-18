import { useState } from 'react';

const useToggleDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return [open, toggleDrawer];
};

export default useToggleDrawer;
