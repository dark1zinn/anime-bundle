import { Link } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {
    return (
        <nav>
            <Link to="/animes">Animes</Link>
            <Link to="/about">Sobre</Link>
        </nav>
    )
}

export default Navbar