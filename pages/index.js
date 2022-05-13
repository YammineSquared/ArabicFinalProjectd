import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return ( 
    <>
      <Head>
        <title>محمد علي شاكر</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <iframe src="/index.html" ></iframe>
    </>     
  )
}
