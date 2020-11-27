
import { useState } from 'react';

import Hamburger from './Hamburger';
import Menu from './Menu';

const Navigation = () => {
  const [open, toggleNavigation] = useState<boolean>(false);

  return (
    <>
      <Hamburger
        active={open}
        toggleNavigation={toggleNavigation}
      />

      {open && (
        <Menu />
      )}
    </>
  );
};

export default Navigation;