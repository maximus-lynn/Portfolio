import { Router } from 'next/router';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import breakpoints from '../assets/css/breakpoints';

// CSS
// import GlobalCSS from '../assets/css/global';
import '../assets/css/variables.css';

// Atoms
import Loading from '../components/atoms/Loading';


const GlobalStyle = createGlobalStyle`
  body {
    display: none;
  }
`;

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

