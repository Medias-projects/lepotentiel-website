import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import {
  fectchDataWithQueryAndVariables,
  formatArticle,
} from "../../../graphql/utils";
import { GET_POST_BY_SLUG } from "../../../graphql/queries";
import { ArticleDetailQueryResponse } from "../../../graphql/type";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { slug } = req.query;
  try {
    const response = await fectchDataWithQueryAndVariables(GET_POST_BY_SLUG, {
      id: slug,
    });
    const data: ArticleDetailQueryResponse = await response.post;
    if (!data) {
      // redirect to 404 page
      res.status(404).json({ message: "Article not found" });
      res.redirect(404, `/404?message=Article with slug ${slug} not found`);
    }
    res.status(200).json(formatArticle(data));
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
