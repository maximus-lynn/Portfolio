import { Router } from 'next/router';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

// CSS
import global from '../assets/css/global';
import '../assets/css/variables.css';

const GlobalStyle = createGlobalStyle`
  ${global}
`;

// Atoms
import Loading from '../components/atoms/loading';

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState<boolean>(false);

  Router.events.on('routeChangeStart', () => setLoading(true));
  Router.events.on('routeChangeComplete', () => setLoading(false));

  return (
    <>
      { loading ? <Loading /> : <>
          <GlobalStyle />
          <Component {...pageProps} />
      </>}
    </>
  )
}

export default App;

