import { Layout, Todos } from '../components'

export default () => (
    <Layout>
        <div className="container">
            <h1 className="f1 lh-title tc">Todo List</h1>

            <Todos />
        </div>
    </Layout>
)
