import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query getPosts($first: Int = 50) {
    posts(first: $first) {
      edges {
        node {
          id
          title
          uri
          slug
          date
          featuredImage {
            node {
              caption
              mediaItemUrl
              sourceUrl
              fileSize(size: MEDIUM)
            }
          }
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories($first: Int = 50) {
    categories(first: $first) {
      edges {
        node {
          id
          name
          slug
          
        }
      }
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = gql`
  query getPostsByCategory($first: Int = 50, $category: String!) {
    posts(first: $first, where: { categoryName: $category }) {
      edges {
        node {
          id
          title
          uri
          slug
          date
          featuredImage {
            node {
              caption
              mediaItemUrl
              sourceUrl
              fileSize(size: MEDIUM)
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query getPostByUri($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      date
      excerpt
      content
      featuredImage {
        node {
          caption
          mediaItemUrl
          sourceUrl
          fileSize(size: LARGE)
        }
      }
      auteur {
        nomDeLauteur
      }
      author {
        node {
          avatar {
            url
          }
          firstName
          lastName
        }
      }
      categories {
        edges {
          node {
            name
            posts(first: 5) {
              edges {
                node {
                  id
                  title
                  uri
                  slug
                  date
                  featuredImage {
                    node {
                      mediaItemUrl
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_POSTS = gql`
  query NewQuery($search: String) {
    posts(where: { search: $search }, first: 100) {
      edges {
        node {
          title
          uri
          slug
          date
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;
