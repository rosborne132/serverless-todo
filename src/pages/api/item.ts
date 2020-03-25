import * as express from 'express'

import { deleteTodo, getTodos, patchTodo, putTodo } from '../../services'

export default async (req: express.Request, res: express.Response) => {
    let results

    switch (req.method) {
        case 'POST':
            const { todoName } = req.body
            results = await putTodo({
                todoName
            })
            break

        case 'GET':
            results = await getTodos()
            break

        case 'PATCH':
            const { todo } = req.body
            results = await patchTodo(todo)
            break

        case 'DELETE':
            const { todoId } = req.query
            results = await deleteTodo({ todoId })
            break

        default:
            res.end()
    }

    res.end(JSON.stringify(results))
}
