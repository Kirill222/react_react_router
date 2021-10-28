import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const Article = () => {

    //const [article, setArticle] = useState({})

    const {artId} = useParams()    

    const {data: article, isPending, error } = useFetch(`http://localhost:3000/articles/${artId}`)

    

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}

export default Article