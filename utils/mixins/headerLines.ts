type Params = {
  size: string;
  width: string;
  borderColour?: string;
}

const headerLine = ({ size, width, borderColour }: Params): string => `
  font-size: ${size};

  :after {
    content: '';
    display: block;
    ${borderColour && `border-bottom: 3px solid ${borderColour}`};
    margin: 0 auto;
    margin-top: 1rem;
    width: ${width};
  }
`;

export default headerLine;