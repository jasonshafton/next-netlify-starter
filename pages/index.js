import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shafton.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Shafton.org" />
        <p className="description">
         Welcome to shafton.org
        </p>
      </main>

      <Footer />
    </div>
  )
}
