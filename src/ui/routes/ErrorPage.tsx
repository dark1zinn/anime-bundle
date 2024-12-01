import { Link } from "react-router-dom"
import './css/ErrorPage.css'
import '../assets/cssUtils.css'


const ErrorPage = () => {
    return (
        <div id="page-error">
            <h1>Algo deu errado!</h1>
            <p>Volte para a <Link className="span-anchor" to='/'>Homepage</Link>!</p>
        </div>
    )
}

export default ErrorPage