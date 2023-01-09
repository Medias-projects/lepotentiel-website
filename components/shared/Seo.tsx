import { NextSeo } from "next-seo";

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

function Seo({ title, description, image }: Props) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical="https://lepotentiel.cd/"
      titleTemplate="Le Potentiel CD"
      openGraph={{
        type: "website",
        locale: "fr_FR",
        url: "https://lepotentiel.cd/",
        site_name: "Le Potentiel CD",
        images: [
          {
            url: image as string,
            width: 800,
            height: 600,
            alt: "Le Potentiel image",
          },
          {
            url: image as string,
            width: 900,
            height: 800,
            alt: "Le Potentiel image",
          },
          {
            url: image as string,
            width: 800,
            height: 600,
          },
        ],
      }}
      twitter={{
        handle: "@lepotentielcd",
        site: "@lepotentielcd",
        cardType: "summary_large_image",
      }}
    />
  );
}

export default Seo;
