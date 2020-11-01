// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'

import "../scss/index.scss"
import "typeface-alata"
import "typeface-lato"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default MyApp