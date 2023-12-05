import "@/styles/globals.css";
import { AuthUserProvider } from "@/firebase/auth";
import { NextUIProvider } from "@nextui-org/react";

import PrimaryLayout from "./layouts/primary";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthUserProvider>
      <NextUIProvider>
        <PrimaryLayout>{getLayout(<Component {...pageProps} />)}</PrimaryLayout>
      </NextUIProvider>
    </AuthUserProvider>
  );
}
