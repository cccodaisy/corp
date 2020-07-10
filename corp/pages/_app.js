import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>
      <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="viewport" content="width=device-width" />
      <style>{"* {font-family: ‘’;}"}</style>
    </Head>
    <Component {...pageProps} />
  </div>
  )
}
export default MyApp;
