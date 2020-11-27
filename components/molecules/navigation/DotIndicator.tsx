import styled from 'styled-components';

interface Props {
  active: boolean;
  navWidth: number;
}

export default styled('span')<Props>`
  background-color: var(--ball-background);
  border-radius: 50%;
  display: inline-block;
  width: 10px;
  height: 10px;
  transition: transform 0.5s;

  ${({ active, navWidth }) => active ? `
    transform: translate(calc(${navWidth / 4}px - 5px));
  ` : `
    transform: translate(calc(${(navWidth / 4) * 3}px - 5px));
  `}
`;