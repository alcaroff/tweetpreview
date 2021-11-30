import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@nextui-org/react";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
