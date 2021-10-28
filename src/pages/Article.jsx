import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

const Article = () => {

    const {artId} = useParams()    

    const {data: article, isPending, error } = useFetch(`http://localhost:3000/articles/${artId}`)

    const history = useHistory()

    useEffect(() => {
        if (error) {
            //redirect
            setTimeout(() => history.push('/'), 3000) //to give the user time to read error message

        }
    }, [error, history]) //history was added to the dependancy array just because it is declared outside of useEffect

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