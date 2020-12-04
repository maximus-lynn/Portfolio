const headerLineLeft = (borderColour: string): string => `
  display: flex;
  align-items: center;

  :before {
      content: '';
      display: inline-block;
      border-bottom: 3px solid ${borderColour};
      width: 30px;
      margin-right: 1rem;
  }
`;

export default headerLineLeft;