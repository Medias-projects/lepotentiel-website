import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import { fectchDataWithQueryAndVariables,formatArticle } from '../../../graphql/utils'
import { GET_POST_BY_SLUG } from '../../../graphql/queries'
import { ArticleDetailQueryResponse } from "../../../graphql/type";


const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query 
    try {
        const response = await fectchDataWithQueryAndVariables(GET_POST_BY_SLUG, { id: slug })
        const data: ArticleDetailQueryResponse = await response.post
        res.status(200).json(formatArticle(data))
    }
    catch(error) {
        res.status(500).json({ error })
    }
}

export default handler


