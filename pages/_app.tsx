import { useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Layout from "../components/layouts/index";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 60 * 24 * 7,
            cacheTime: 1000 * 60 * 60 * 24 * 7,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: false,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>Le Potentiel</title>
          <meta
            name="description"
            content="Actualités , infos en RDC et dans le monde"
          />
          <meta name="author" content="Le Potentiel" />
          <meta name="keywords" content="RDC, Actualités, Infos" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="google" content="notranslate" />

          <meta property="og:locale" content="fr_FR" />
          <meta property="og:type" content="website" />

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/icon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
