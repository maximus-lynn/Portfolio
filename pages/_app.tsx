import { Router } from 'next/router';
import { useState } from 'react';

// CSS
// import GlobalCSS from '../assets/css/global';
import '../assets/css/variables.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 85%;

    @include breakpoint(medium) {
        font-size: 86%;
    }

    @include breakpoint(large) {
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
    font-size: 1rem;
  }
`;

// Atoms
import Loading from '../components/atoms/Loading';
import { createGlobalStyle } from 'styled-components';

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState<boolean>(false);

  Router.events.on('routeChangeStart', () => setLoading(true));
  Router.events.on('routeChangeComplete', () => setLoading(false));

  return (
    <>
      <GlobalStyle />
      { loading ? <Loading /> : <>
          <Component {...pageProps} />
      </>}
    </>
  )
}

export default App;

