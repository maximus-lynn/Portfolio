import styled from "styled-components";

interface Props {
  large: boolean;
}

export default styled('p')<Props>`
  line-height: 1.5;
  letter-spacing: 2px;

  ${({ large }) => large && 'font-size: var(--large-para)'}
`;