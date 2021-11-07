import NavBar from '../components/NavBar'
import '../styles/globals.css'
import Head from 'next/head'

function App ({ Component, pageProps }) {
  console.log('log')
  return (
    <>
    <Head>
        <link rel="icon" href="favicon.png" />
    </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default App
