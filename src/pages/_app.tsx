import type { AppProps } from 'next/app';
import Head from 'next/head';

import './index.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Emilien Muraton</title>
      <meta
        name="description"
        content="Frontend developer based in London working with React and React Native."
      />
      <meta property="og:title" content="Emilien Muraton" />
      <meta
        property="og:description"
        content="Frontend developer based in London working with React and React Native."
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
