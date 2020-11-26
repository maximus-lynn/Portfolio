import { FC, SetStateAction, Dispatch } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Breakpoints
import breakpoints from '../../../assets/css/breakpoints';

interface Props {
  measureNavWidth(node: HTMLElement | null): void;
  setActive: Dispatch<SetStateAction<boolean>>;
  pathCheck: boolean;
}

const Nav = styled('nav')`
  display: flex;
`;

const NavLink = styled('a')`
  font-size: var(--h1);
  font-family: var(--header-font-family);
  text-transform: uppercase;
  letter-spacing: 6px;
  color: var(--body-font-color);
  text-decoration: none;

  display: inline-block;
  padding: 2.5rem 1rem;
  cursor: pointer;
  background-color: var(--white);

  @media only screen and (min-width: ${breakpoints.medium}) {
    padding: 0 5rem;
  }
`;

const NavItems: FC<Props> = ({ measureNavWidth, setActive, pathCheck }) => (
  <Nav ref={measureNavWidth}>
    <Link href="/">
      <NavLink
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(pathCheck)}
      >
        HOME
      </NavLink>
    </Link>
    <Link href="/work">
      <NavLink
        onMouseEnter={() => setActive(false)}
        onMouseLeave={() => setActive(pathCheck)}
      >
        WORK
      </NavLink>
    </Link>
  </Nav>
);

export default NavItems;