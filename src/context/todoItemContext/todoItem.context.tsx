import * as React from 'react'
import axios from 'axios'

export type Todo = {
    todoId: number
    todoName: string
    isComplete: boolean
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
        axios.get(apiUrl).then(({ data }) => {
            setTodos(data)
        })
    }, [])

    const addTodo = async (todoName: string): Promise<void> => {
        let newTodo

        try {
            newTodo = await axios.post(apiUrl, { todoName })
        } catch (err) {
            console.error(err)
        } finally {
            const newTodos = [...todos, newTodo.data]

            setTodos(newTodos)
        }
    }

    const editTodo = async (todoId: string): Promise<void> => {
        let newTodo
        const todo = todos.filter(todo => todo.todoId === todoId)[0]

        try {
            newTodo = await axios.patch(apiUrl, { todo })
        } catch (err) {
            console.error(err)
        } finally {
            const newTodos = todos.map(todo =>
                todo.todoId === todoId ? newTodo.data : todo
            )
            setTodos(newTodos)
        }
    }

    const deleteTodo = async (todoId: string): Promise<void> => {
        try {
            await axios.delete(`${apiUrl}?todoId=${todoId}`)
        } catch (err) {
            console.error(err)
            return
        } finally {
            const newTodos = todos.filter(todo => todo.todoId !== todoId)
            setTodos(newTodos)
        }
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
