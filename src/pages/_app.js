import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import Global from "@/styles/global";


export default function App({ Component, pageProps }) {
  return <>
    <Global />
    <Header />
    <Navbar />
    <Component {...pageProps} />

  </>

}