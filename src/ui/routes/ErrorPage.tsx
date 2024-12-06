import { Link } from "react-router-dom"
import './css/ErrorPage.css'
import SpinerAnimedSpiningGear from "../assets/spiners-animedSvg/spiner-SpiningGear"


const ErrorPage = () => {
    return (
        <div id="page-error">
            <SpinerAnimedSpiningGear />
            <h1>Algo deu errado!</h1>
            <p>Estamos trabalhando nisso 🔧<br />Volte para a <Link className="span-anchor" to='/'>Homepage</Link>!</p>
        </div>
    )
}

export default ErrorPage