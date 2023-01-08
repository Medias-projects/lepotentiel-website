import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

function Seo({ title, description, image }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description || "Actualités en RDC et dans le monde"}
      />
      <meta name="image" content={image || "/images/icon.png"} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google" content="notranslate" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#e5232c" />
      <meta name="msapplication-TileColor" content="#e5232c" />
      <meta name="msapplication-TileImage" content="/images/icon.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="apple-mobile-web-app-title" content="Le Potentiel CD" />
      <meta name="application-name" content="Le Potentiel CD" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Le Potentiel CD" />
      <meta name="application-name" content="Le Potentiel CD" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="referrer" content="origin" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lepotentielcd" />
      <meta name="twitter:creator" content="@lepotentielcd" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Le Potentiel CD" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content="https://lepotentiel.cd" />
      <meta property="og:locale" content="fr_FR" />

      <link rel="icon" href="/icon.png" />
    </Head>
  );
}

export default Seo;
