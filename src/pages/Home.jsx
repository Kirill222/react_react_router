import {useFetch} from '../hooks/useFetch'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {

    const {data: articles, isPending, error} = useFetch('http://localhost:3000/articles')

    return (
        <div className="home">
            <h2>Articles</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {articles && articles.map(art => (
                <div key={art.id} className="card">
                    <h3>{art.title}</h3>
                    <p>{art.author}</p>
                    <Link to={`/articles/${art.id}`}>Read more...</Link>
                </div>
            ))}
        </div>
    )
}

export default Home