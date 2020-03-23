import * as express from 'express'

import { deleteItem, getItems, patchItem, putItem } from '../../services'

export default async (req: express.Request, res: express.Response) => {
    let results

    switch (req.method) {
        case 'POST':
            results = await putItem({
                itemName: req.body.itemName
            })
            break

        case 'GET':
            // results = await getItems({ username: user.nickname })
            break

        case 'PATCH':
            results = await patchItem({
                item: req.body.item
            })
            break

        case 'DELETE':
            results = await deleteItem({
                itemId: req.query.itemId
            })
            break

        default:
            res.end()
    }

    res.end(JSON.stringify(results))
}
