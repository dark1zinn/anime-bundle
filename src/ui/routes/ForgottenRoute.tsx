import { Link } from "react-router-dom"
import SpinerAnimedSpiningGear from "../assets/spiners-animedSvg/spiner-SpiningGear"
import './css/ForgottenRoute.css'

const ForgottenRoute = () => {
    return (
        <div id="page-forgotten">
            <SpinerAnimedSpiningGear />
            <h1>Parece que você virou a esquina errada!</h1>
            <p>Você vai ser redirecionado para a <Link className="span-anchor" to='/'>Homepage</Link> em alguns segundos!</p>
        </div>
    )
}

export default ForgottenRoute