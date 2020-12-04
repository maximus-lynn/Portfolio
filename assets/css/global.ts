import breakpoints from "./breakpoints";

export default `
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 85%;

    @media only screen and (min-width: ${breakpoints.medium}) {
      font-size: 86%;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
      font-size: 90%;
    }
  }

  body {
    font-family: var(--body-font-family);
    color: var(--body-font-color);
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--header-font-family);
    text-transform: uppercase;
    letter-spacing: 6px;
  }

  p {
    line-height: 1.5;
    letter-spacing: 2px;
  }

  a {
    display: inline-block;
    color: var(--white);
    font-weight: bold;

    cursor: pointer;
  }
`;