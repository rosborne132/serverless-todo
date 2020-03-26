import * as React from 'react'
import { TodoForm } from './TodoForm/TodoForm'
import { TodoList } from './TodoList/TodoList'

export const Todos: React.FC = React.memo(
    (): JSX.Element => (
        <section className="bg-white br4 center pa3 shadow-5">
            <TodoForm />
            <TodoList />
        </section>
    )
)
