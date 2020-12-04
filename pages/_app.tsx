import { Router } from 'next/router';
import { useState } from 'react';

// CSS
import GlobalStyle from '../assets/css/global';
import '../assets/css/variables.css';

// Atoms
import Loading from '../components/atoms/Loading';

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

