import { Layout, Todos } from '../components'

const Home = () => (
    <Layout>
        <div className="container">
            <h1 className="title">Welcome to Todo List</h1>

            <Todos />
        </div>
    </Layout>
)

export default Home
