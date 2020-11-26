import { FC, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';

interface Props {
  active: boolean;
  toggleNavigation: Dispatch<SetStateAction<boolean>>;
}

const HamburgerContainer = styled('span')<Props>`
  position: absolute;
  top: 2.5rem;
  right: 2rem;
  z-index: 3;

  width: 60px;
  height: 35px;
  cursor: pointer;
  display: block;

  &::before,
  &::after,
  span {
    background-color: var(--hamburger-background);
    transition: all .5s;
    width: 100%;
    height: 5px;

    position: absolute;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    top: 0;
  }

  &::after {
    width: 50%;
    top: initial;
    bottom: 0;
    left: 50%;
  }

  span {
    top: 50%;
    transform: translateY(-50%);
    left: 25%;
    width: 75%;
  }

  ${({ active }) => active && `
    position: fixed;

    &::before,
    &::after,
    span {
      background-color: var(--hamburger-active-background);
      left: 0px;
    }
  `}
`;

const Hamburger: FC<Props> = ({ active, toggleNavigation }) => (
  <HamburgerContainer
    onClick={() => toggleNavigation(!active)}
    active={active}
  >
    <span />
  </HamburgerContainer>
);

export default Hamburger;