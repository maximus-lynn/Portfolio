import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";

import DotIndicator from './DotIndicator';
import NavItems from './NavItems';

const MenuContainer = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background-color: var(--white);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = () => {
  const router = useRouter();
  const pathCheck = router.pathname === '/';
  const [active, setActive] = useState<boolean>(pathCheck);
  const [navWidth, setNavWidth] = useState<number>(0);

  const measureNavWidth = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setNavWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (
  <MenuContainer>
    <div>
      <NavItems
        measureNavWidth={measureNavWidth}
        setActive={setActive}
        pathCheck={pathCheck}
      />

      <DotIndicator
        navWidth={navWidth}
        active={active}
      />
    </div>
  </MenuContainer>
)};

export default Menu;