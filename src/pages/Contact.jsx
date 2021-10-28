import { useLocation } from "react-router-dom"

const Contact = () => {

    const queryString = useLocation().search  //returns a string like: '?name=batman' with all query parameters

    console.log(queryString)

    const queryParams = new URLSearchParams(queryString)  //native JS api
    const name = queryParams.get("name")

    return (
        <div>
            <h2>Hey {name}, Contact us here...</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, a voluptatibus. Perspiciatis atque odio doloremque iste est vero tempora reprehenderit, modi molestias deserunt repellendus, ea officia aliquid culpa id tempore.</p>
        </div>
    )
}

export default Contact