export type ArticleQueryResponse = {
    id: string;
    title: string;
    uri: string;
    slug: string;
    date: string;
    featuredImage: {
        node: {
            caption: string;
            mediaItemUrl: string;
            sourceUrl: string;
        };
    };
    categories: {
        edges: {
            node: {
                name: string;
                slug: string;
            };
        }[];
    };

}
export type ArticleDetailQueryResponse = {
    id: string;
    title: string;
    uri: string;
    slug: string;
    date: string;
    content: string;
    excerpt: string;
    featuredImage: {
        node: {
            
            mediaItemUrl: string;
            sourceUrl: string;
        };
    };
    auteur: {
        nomDeLauteur:string
      }
    author : {
        node :{
          avatar :{
            url:string
          }
          firstName :string
          lastName : string
        }
      }
    categories: {
        edges: {
            node: {
                name: string;
                posts: {
                    edges: {
                        node: ArticleDetailQueryResponse[]
                    }
                                    
                }
            };
        }[];
    };
    exceprt:string

}

export type Article = {
    id: string
    title: string
    slug: string
    date: string
    image: string
    categories: string[]
    content: string
    excerpt: string
    posts: Article[]

}

export type ServiceQueryResponse = {
    id: string;
    title: string;
    champsServices: {
        lienDuService:string
    };
    typeServices: {
        edges: {
            node: {
                name: string;
            };
        }[];
    };
}

export type Services = {
    id: string
    title: string
    link: string
    type: string
    
}

export type DocumentQueryResponse = {
    id: string;
    title: string;
    slug: string;
    date: string;
    typeDocuments: {
        edges: {
            node: {
                name: string;
            };
        }[];
    };
    champDocuments :{
        fichier :{
            sourceUrl,
            mediaItemUrl
        }
    }
}

export type Documents = {
    id: string
    title: string
    slug: string
    date: string
    type: string
    link: string
}
