import * as React from 'react'
import { TodoItemContext } from '../../../context'

export const TodoForm: React.FC = React.memo(
    (): JSX.Element => {
        const [todoItem, setTodoItem] = React.useState<string>('')
        const { addTodo } = React.useContext(TodoItemContext)

        const onSubmit = (e: React.FormEvent<EventTarget>): void => {
            e.preventDefault()

            if (!todoItem.length) {
                return
            }

            setTodoItem('')
            addTodo(todoItem)
        }

        return (
            <form className="center" onSubmit={onSubmit}>
                <fieldset className="bn flex justify-between ma0 pa0 w-100">
                    <div className="flex w-100">
                        <label className="w-100" htmlFor="todoItem">
                            <input
                                className="ba b--light-white br3 f4 indent pa2 w-90"
                                value={todoItem}
                                onChange={e => setTodoItem(e.target.value)}
                            />
                        </label>

                        <button
                            className="bg-blue-green bn br3 pa2 pointer w-25 white"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        )
    }
)
