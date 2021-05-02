import Head from "next/head"
import "../../styles/globals.scss"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1"
        />
        <meta name="description" content="Description" />
        <meta name="theme-color" content="#404749" />
        <title>React boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/icons/apple-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
