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
export const GET_SERVICES = gql`
  query Services($first: Int = 50) {
    services(first: $first) {
      edges {
        node {
          title
          champsServices {
            lienDuService
          }
          typeServices {
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

export const GET_DOCUMENTS = gql`
  query Documents($first: Int = 50) {
    documents(first: $first) {
      edges {
        node {
          id
          title
          slug
          date
          typeDocuments {
            edges {
              node {
                name
              }
            }
          }
          champsDocuments {
            fichier {
              mediaItemUrl
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_DOCUMENTS_BY_SLUG = gql`
  query getDocumentBySlug($id: ID!) {
    document(id: $id, idType: SLUG) {
      title
      date
      champsDocuments {
        fichier {
          mediaItemUrl
          sourceUrl
        }
      }
      typeDocuments {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

export const GET_MINISTRE = gql`
  query Ministre($first: Int = 1) {
    cabinets(first: $first, where: { title: "Nicolas Kazadi" }) {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              mediaItemUrl
              sourceUrl
            }
          }
          champs_cabinet {
            biographie
            poste
            socials {
              lien
              nom
            }
          }
        }
      }
    }
  }
`;

export const GET_VICE_MINISTRE = gql`
  query Ministre($first: Int = 1) {
    cabinets(first: $first, where: { title: "O'Neige N'Sele" }) {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              mediaItemUrl
              sourceUrl
            }
          }
          champs_cabinet {
            biographie
            poste
            socials {
              lien
              nom
            }
          }
        }
      }
    }
  }
`;

export const GET_CABINET = gql`
  query membresCabinet($first: Int = 50) {
    cabinets(first: $first) {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              mediaItemUrl
              sourceUrl
            }
          }
          champs_cabinet {
            biographie
            poste
            socials {
              lien
              nom
            }
          }
        }
      }
    }
  }
`;
