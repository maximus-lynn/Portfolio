import styled from "styled-components";

import breakpoints from '../../assets/css/breakpoints';

interface  Props {
  center: boolean;
}

export default styled('section')<Props>`
  padding: 3rem 1.5rem;
  margin: 0 auto;
  max-width: 52rem;

  ${({ center }) => center && 'text-align: center;'}

  @media only screen and (min-width: ${breakpoints.medium}) {
    padding: 5.625rem 1.5rem;
  }
`;