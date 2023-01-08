import { request } from "graphql-request";

const endpoint: string | any = process.env.WORDPRESS_API_URL;

export const fectchDataWithQueryAndVariables = (
  query: string,
  variables: object
) => {
  return request(endpoint, query, variables).then((data: any) => data);
};

export const fectchDataWithQuery = (query: string) => {
  return request(endpoint, query).then((data: any) => data);
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const fetchInPost = async (url: string, body: {}) => {
  const message = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const response = message.json();

  return response;
};

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

export const formatArticle = (article: any) => {
  return {
    id: article.id,
    title: article.title,
    slug: article.slug,
    excerpt: article?.excerpt,
    date: formatDate(article.date),
    image: article.featuredImage.node.mediaItemUrl,
    categories: article.categories.edges.map(
      (category: any) => category.node.name
    )[0],
    content: article.content,
    author: article.auteur?.nomDeLauteur
      ? article.auteur?.nomDeLauteur
      : `${article?.author?.node?.firstName || ""} ${
          article?.author?.node?.lastName || ""
        }`,
    imageAuthor: article.auteur?.nomDeLauteur
      ? "https://lepotentiel.cd/wp-content/uploads/2022/03/cropped-favicon.jpg"
      : article?.author?.node?.avatar?.url,
    similarPosts: article.categories.edges.map((category: any) =>
      category.node.posts.edges.map((post: any) => post.node)
    ),
  };
};
