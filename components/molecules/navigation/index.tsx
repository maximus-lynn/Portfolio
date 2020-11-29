
import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';

import breakpoints from '../../../assets/css/breakpoints';

// Navigation Components
import Hamburger from './Hamburger';
import Menu from './Menu';

// Atoms
import Avatar from '../../atoms/Avatar';
import LeftArrowLink from '../../atoms/buttons/LeftArrowLink';


const BreadCrumb = styled('div')`
  position: absolute;
  top: 2rem;
  left: 50%;
  z-index: 1;

  transform: translateX(-50%);

  @media only screen and (max-width: ${breakpoints.smallOnly}) {
    display: none;
  }
`;

const Anchor = styled('a')`
  display: inline;
`;

const Navigation = () => {
  const [open, toggleNavigation] = useState<boolean>(false);
  const { query, pathname } = useRouter();
  const showAvatar = pathname !== '/';
  return (
    <>
      {showAvatar && (
        <Link href="/">
          <Anchor>
            <Avatar />
          </Anchor>
        </Link>
      )}

      {query.workDetails && (
        <BreadCrumb>
          <LeftArrowLink>
            Work
          </LeftArrowLink>
        </BreadCrumb>
      )}

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