import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import { fectchDataWithQueryAndVariables } from '../../../graphql/utils'
import { GET_CATEGORIES } from '../../../graphql/queries'


const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { offset } = req.query
    const first : number = parseInt(offset as string)
   
    try {
        const response = await fectchDataWithQueryAndVariables(GET_CATEGORIES, { first: first })
        const data = await response.categories.edges.map((categorie: any) => {
            return {
                id: categorie.node.id,
                name: categorie.node.name,
                slug: categorie.node.slug,
               
            }
        }).filter((categorie: any) => categorie.name !== 'Non classé')
        res.status(200).json(data)
       
    }
    catch (error) {
        res.status(500).json({ error })
    }
   
}

export default handler


