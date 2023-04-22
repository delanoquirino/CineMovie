import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import Global from "@/styles/global";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>CineMovie</title>
    </Head>
    <Global />
    <Header />
    <Navbar />
    <Component {...pageProps} />
  </>

}