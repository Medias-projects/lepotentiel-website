import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import { fectchDataWithQueryAndVariables } from '../../../graphql/utils'
import { GET_POSTS } from '../../../graphql/queries'
import { ArticleQueryResponse } from "../../../graphql/type";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { offset } = req.query 
   
    try {
        const response = await fectchDataWithQueryAndVariables(GET_POSTS, { first: parseInt(offset as string) })
        const data: ArticleQueryResponse[] = await response.posts.edges.map((post: any) => post.node)
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ error })
    }
}

export default handler





