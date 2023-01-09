import { lazy } from "react";
import Seo from "../components/shared/Seo";
import Hero from "../components/home/Hero";
import Categorie from "../components/home/Categorie";
import CategorieTwo from "../components/home/CategorieTwo";
import CategorieThree from "../components/home/CategorieThree";
import CategorieFour from "../components/home/CategorieFour";
import CategorieFive from "../components/home/CategorieFive";
import CategorieSix from "../components/home/CategorieSix";
import { useArticles } from "../hooks/useArticles";
import { useArticlesByCategories } from "../hooks/useArticlesByCategories";

export default function Home() {
  const { articles, ArticleLoading } = useArticles(11);
  const { categories: nation, isFetching: nationLoading } =
    useArticlesByCategories("nation", 10);

  const { categories: international, isFetching: internationalLoading } =
    useArticlesByCategories("international", 9);

  const { categories: annonces, isFetching: annoncesLoading } =
    useArticlesByCategories("annonces", 10);
  const { categories: sport, isFetching: sportLoading } =
    useArticlesByCategories("sports", 10);

  const { categories: aHauteVoix, isFetching: aHauteVoixLoading } =
    useArticlesByCategories("a-haute-voix", 8);
  const { categories: culture, isFetching: cultureLoading } =
    useArticlesByCategories("culture", 8);
  const { categories: economie, isFetching: economieLoading } =
    useArticlesByCategories("economie", 8);
  const { categories: politique, isFetching: politiqueLoading } =
    useArticlesByCategories("politique", 8);
  const { categories: societe, isFetching: societeLoading } =
    useArticlesByCategories("societe", 8);
  const { categories: focus, isFetching: focusLoading } =
    useArticlesByCategories("focus", 8);
  const { categories: apostrophe, isFetching: apostropheLoading } =
    useArticlesByCategories("apostrophe", 8);
  const { categories: cinqQuestion, isFetching: cinqQuestionLoading } =
    useArticlesByCategories("cinq-questions", 8);

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
      <CategorieFour articles={sport} loading={sportLoading} title="sport" />
      <CategorieFive
        articles={aHauteVoix}
        loading={aHauteVoixLoading}
        title="A haute voix"
      />
      <CategorieSix articles={focus} loading={focusLoading} title="focus" />
      <CategorieFive
        articles={societe}
        loading={societeLoading}
        title="societe"
      />
      <CategorieSix
        articles={economie}
        loading={economieLoading}
        title="economie"
      />
      <CategorieFive
        articles={politique}
        loading={politiqueLoading}
        title="politique"
      />
      <CategorieSix
        articles={culture}
        loading={cultureLoading}
        title="culture"
      />
      <CategorieFive
        articles={apostrophe}
        loading={apostropheLoading}
        title="apostrophe"
      />
      <CategorieSix
        articles={cinqQuestion}
        loading={cinqQuestionLoading}
        title="cinq questions"
      />
    </>
  );
}
