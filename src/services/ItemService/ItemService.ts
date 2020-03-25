import { v4 as uuid } from 'uuid'
import dbClient, { docClient, parseData } from '../../lib/dynamodb'

export type Todo = {
    isComplete?: boolean
    todoId?: string
    todoName?: string
}

const TableName = 'todo-items-prod'

export const getTodos = async (): Promise<Todo[]> => {
    const { Items } = await dbClient
        .query({
            TableName,
            IndexName: 'username-index',
            ProjectionExpression: 'isComplete, itemId, itemName',
            KeyConditionExpression: '#user = :v_user'
            // ExpressionAttributeNames: {
            //     '#user': 'username'
            // },
            // ExpressionAttributeValues: {
            //     ':v_user': { S: username }
            // }
        })
        .promise()

    return Items.map(item => parseData.unmarshall(item))
}

export const putTodo = async ({ todoName }: Todo): Promise<Todo> => {
    const params = {
        TableName,
        Item: {
            isComplete: false,
            todoId: uuid(),
            todoName
        }
    }
    try {
        await docClient.put(params).promise()
    } catch (err) {
        console.error(err)
    } finally {
        const { todoId, todoName, isComplete } = params.Item
        return { todoId, todoName, isComplete }
    }
}

export const deleteTodo = async ({ todoId }: Todo) => {
    const params = {
        TableName,
        Key: {
            todoId
        },
        ConditionExpression: 'itemId = :id',
        ExpressionAttributeValues: {
            ':id': todoId
        }
    }

    try {
        await docClient.delete(params).promise()
    } catch (err) {
        console.error(err)
    }
}

export const patchTodo = async ({
    todoId,
    isComplete,
    todoName
}: Todo): Promise<Todo> => {
    const newValue = !isComplete
    const params = {
        TableName,
        Key: {
            todoId
        },
        UpdateExpression: 'set isComplete = :val',
        ExpressionAttributeValues: {
            ':val': newValue
        },

        ReturnValues: 'UPDATED_NEW'
    }

    try {
        await docClient.update(params).promise()
    } catch (err) {
        console.error(err)
    } finally {
        return { todoId, todoName, isComplete: !isComplete }
    }
}
