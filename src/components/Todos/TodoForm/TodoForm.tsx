import * as React from 'react'
import { TodoItemContext } from '../../../context'

export const TodoForm: React.FC = React.memo(
    (): JSX.Element => {
        const [todoItem, setTodoItem] = React.useState<string>('')
        const { addItem } = React.useContext(TodoItemContext)

        const onSubmit = (e: React.FormEvent<EventTarget>): void => {
            e.preventDefault()

            if (!todoItem.length) {
                return
            }

            setTodoItem('')
            addItem(todoItem)
        }

        return (
            <form onSubmit={onSubmit}>
                <fieldset className="bn flex justify-space pa0 ma0">
                    <label className="w-100" htmlFor="todoItem">
                        <input
                            className="ba b--light-white br3 f4 indent pa1 w-90"
                            value={todoItem}
                            onChange={e => setTodoItem(e.target.value)}
                        />
                    </label>

                    <button
                        className="bg-blue pointer br3 bn white"
                        type="submit"
                    >
                        Submit
                    </button>
                </fieldset>
            </form>
        )
    }
)
