import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/Map/Index'
import Navbar from '../components/Navbar/Index'
import Footer from '../components/Footer/Index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Expoline map</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen flex flex-col justify-evenly'>
        <Navbar />
        <Map />
        <Footer />
      </main>
    </>
  )
}
