
import styled from 'styled-components';
import headerLines from '../../../utils/mixins/headerLines';
import { FC } from 'react';

interface Styled {
  size: string;
  width: string;
  fontColour?: string;
  centered?: boolean;
  borderColour: string;
}

interface Props extends Styled {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const StyledHeading = styled('h1')<Styled>`
  ${({ size, width, borderColour }) => `
    ${headerLines({ size, width, borderColour })}
  `}

  ${({ centered }) => centered && `text-align: center;`}
  ${({ fontColour }) => fontColour && `color: ${fontColour};`}
`;

const Heading: FC<Props> = ({
  type,
  size,
  width,
  borderColour,
  centered,
  fontColour,
  children,
}) => {
  return (
    <StyledHeading
      as={type}
      fontColour={fontColour}
      size={size}
      width={width}
      borderColour={borderColour}
      centered={centered}
    >
      {children}
    </StyledHeading>
  );
}

export default Heading;