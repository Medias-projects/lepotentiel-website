import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import {
  fectchDataWithQueryAndVariables,
  formatDate,
} from "../../graphql/utils";
import { SEARCH_POSTS } from "../../graphql/queries";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { search } = req.query;

  try {
    const response = await fectchDataWithQueryAndVariables(SEARCH_POSTS, {
      search: search as string,
    });
    const data = await response.posts.edges?.map((edge: any) => {
      return {
        id: edge.node.id,
        title: edge.node.title,
        slug: edge.node.slug,
        date: formatDate(edge.node.date),
        category: edge.node.categories.edges[0].node.name,
        uri: edge.node.uri,
      };
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
