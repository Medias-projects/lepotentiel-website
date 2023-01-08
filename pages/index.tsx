import Seo from "../components/shared/Seo";
import Hero from "../components/home/Hero";
import Categorie from "../components/home/Categorie";
import CategorieTwo from "../components/home/CategorieTwo";
import CategorieThree from "../components/home/CategorieThree";
import { useArticles } from "../hooks/useArticles";
import { useArticlesByCategories } from "../hooks/useArticlesByCategories";

export default function Home() {
  const { articles, ArticleLoading } = useArticles(11);
  const { categories: nation, isLoading: nationLoading } =
    useArticlesByCategories("nation", 10);

  const { categories: international, isLoading: internationalLoading } =
    useArticlesByCategories("international", 9);

  const { categories: annonces, isLoading: annoncesLoading } =
    useArticlesByCategories("annonces", 10);

  return (
    <>
      <Seo
        title="Le Potentiel CD | Actualités en RDC et dans le monde"
        description="Actualités en RDC et dans le monde"
        image={"/images/icon.png"}
      />
      <Hero articles={articles} loading={ArticleLoading} />
      <Categorie articles={nation} loading={nationLoading} title="nation" />
      <CategorieTwo
        articles={international}
        loading={internationalLoading}
        title="international"
      />
      <CategorieThree
        articles={annonces}
        loading={annoncesLoading}
        title="annonces"
      />
    </>
  );
}
