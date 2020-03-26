import { Layout, Todos } from '../components'

export default () => (
    <Layout>
        <div className="container ph4 sans-serif">
            <h1 className="f1 lh-title tc white">Todo List</h1>
            <p className="center f4 tc w-50 white">
                Please don't store important tasks. All items will be deleted.
            </p>

            <Todos />
        </div>
    </Layout>
)
