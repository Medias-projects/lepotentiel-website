import { useState } from "react";
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
import { DefaultSeo } from "next-seo";

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
        <DefaultSeo
          title="Le Potentiel"
          description="Le Potentiel est un journal d'actualité en ligne qui traite de l'actualité politique, économique, sociale, culturelle et sportive de la République Démocratique du Congo."
          openGraph={{
            type: "website",
            locale: "fr_FR",
            url: "https://lepotentiel.cd/",
            site_name: "Le Potentiel",
            images: [
              {
                url: "https://lepotentiel.cd/images/icon.png",
                width: 800,
                height: 600,
                alt: "Le Potentiel",
              },
            ],
          }}
          twitter={{
            handle: "@lepotentielcd",
            site: "@lepotentielcd",
            cardType: "summary_large_image",
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
