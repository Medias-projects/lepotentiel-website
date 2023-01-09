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
      openGraph={{
        type: "website",
        locale: "fr_FR",
        url: "https://lepotentiel.cd/",
        site_name: "Le Potentiel",
        images: [
          {
            url: `${image}`,
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
  );
}

export default Seo;
