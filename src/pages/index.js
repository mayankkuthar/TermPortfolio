import Head from 'next/head'
import Photu from '../components/photo/Photu'
import Terms from '../components/terminal/Terms'


export default function Home() {
  return (
    <div className=" h-screen flex items-center justify-center w-full bg-background2 bg-cover">
      <Head>
        <title>Create Nex App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Terms/>
     {/* <Photu/> */}
    </div>
  )
}
