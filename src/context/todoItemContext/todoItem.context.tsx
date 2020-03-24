import * as React from 'react'

import axios from 'axios'

export type Todo = {
    todoId: number
    todoName: string
    isPurchased: boolean
}

export type InitState = {
    todos: Todo[]
    addTodo: (string) => void
    editTodo: (number) => void
    deleteTodo: (number) => void
}

const initState = {
    todos: [],
    addTodo: () => {},
    editTodo: () => {},
    deleteTodo: () => {}
}

export const TodoItemContext = React.createContext<InitState>(initState)

export const TodoItemProvider = ({ children }) => {
    const [todos, setTodos] = React.useState([])

    const apiUrl: string = '/api/item'

    React.useEffect(() => {
        // axios.get(apiUrl).then(res => {
        //     setTodos(res.data)
        // })
    }, [])

    const addTodo = async (itemName: string): Promise<void> => {
        let newItem
        // try {
        //     newItem = await axios.post(apiUrl, { itemName })
        // } catch (err) {
        //     console.error(err)
        // } finally {
        //     const newItems = [...items, newItem.data]

        //     setTodos(newItems)
        // }
    }

    const editTodo = async (itemId: string): Promise<void> => {
        let newItem
        const item = todos.filter(item => item.itemId === itemId)[0]
        // try {
        //     newItem = await axios.patch(apiUrl, { item })
        // } catch (err) {
        //     console.error(err)
        // } finally {
        //     const newItems = items.map(item =>
        //         item.itemId === itemId ? newItem.data : item
        //     )
        //     setTodos(newItems)
        // }
    }

    const deleteTodo = async (itemId: string): Promise<void> => {
        // try {
        //     await axios.delete(`${apiUrl}?itemId=${itemId}`)
        // } catch (err) {
        //     console.error(err)
        //     return
        // } finally {
        //     const newItems = items.filter(item => item.itemId !== itemId)
        //     setTodos(newItems)
        // }
    }

    const initState: InitState = {
        todos,
        addTodo,
        editTodo,
        deleteTodo
    }

    return (
        <TodoItemContext.Provider value={initState}>
            {children}
        </TodoItemContext.Provider>
    )
}
