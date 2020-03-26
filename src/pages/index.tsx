import { Layout, Todos } from '../components'

export default () => (
    <Layout>
        <div className="container ph4 sans-serif">
            <h1 className="f1 lh-title tc white">Todo List</h1>

            <Todos />
        </div>
    </Layout>
)
