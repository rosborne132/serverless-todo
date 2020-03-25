import * as React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { TodoItemContext } from '../../../context'
import { TodoItem } from './TodoItem/TodoItem'

export const TodoList: React.FC = React.memo(
    (): JSX.Element => {
        const { todos } = React.useContext(TodoItemContext)

        if (!todos) return <ClipLoader size={150} color={'#123abc'} />

        return (
            <ul className="pa0">
                {todos.map(({ todoId, todoName, isComplete }) => (
                    <TodoItem
                        todoId={todoId}
                        todoName={todoName}
                        isComplete={isComplete}
                    />
                ))}
            </ul>
        )
    }
)
