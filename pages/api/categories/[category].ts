import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import { fectchDataWithQueryAndVariables } from '../../../graphql/utils'
import { GET_POSTS_BY_CATEGORY } from '../../../graphql/queries'
import { ArticleQueryResponse } from "../../../graphql/type";


const Handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {

    const { category,offset } = req.query 
    try {
        const response = await fectchDataWithQueryAndVariables(GET_POSTS_BY_CATEGORY, { first: parseInt(offset as string), category: category as string })
        const data: ArticleQueryResponse[] = await response.posts.edges.map((post: any) => post.node)
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ error })
    }
}
    


export default Handler


