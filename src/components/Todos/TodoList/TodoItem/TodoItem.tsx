import * as React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Todo, TodoItemContext } from '../../../../context'

export const TodoItem: React.FC<Todo> = React.memo(
    ({ todoId, todoName, isComplete }): JSX.Element => {
        const { editTodo, deleteTodo } = React.useContext(TodoItemContext)
        const crossedThrough = isComplete ? 'strike' : ''

        return (
            <motion.li
                style={{
                    listStyleType: 'none',
                    padding: '5px 0',
                    width: '100%'
                }}
                key={todoId}
                whileTap={{ scale: 0.98 }}
            >
                <span className="flex pointer justify-between">
                    <span
                        className={`f4 pl0 ${crossedThrough}`}
                        onClick={() => editTodo(todoId)}
                    >
                        {todoName}
                    </span>
                    <button
                        className="bg-white bn pointer"
                        onClick={() => deleteTodo(todoId)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </span>
            </motion.li>
        )
    }
)
