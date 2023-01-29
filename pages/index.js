import Navbarr from "@/components/Navbarr";
import Head from 'next/head'
import HeroBanner from "@/components/HeroBanner";
import { Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <>
        <Head>
          <title>Taku</title>
          <meta name="description" content="E-commerce website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbarr/>
        <Spacer y={1}/>
        <HeroBanner/>
    </>
  )
}

