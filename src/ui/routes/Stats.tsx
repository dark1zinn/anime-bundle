import { Link } from "react-router-dom"
import './css/Stats.css'

const Stats = () => {
    return (
        <div id="page-stats">
            <h2>Status</h2>
            <h2>Ainda em desenvolvimento!</h2>
            <p>Volte para a <Link className="span-anchor" to='/'>Homepage</Link>!</p>
        </div>
    )
}

export default Stats