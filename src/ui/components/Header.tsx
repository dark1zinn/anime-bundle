import Navbar from "./NavBar"
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <header>
            <div>
                <Link to='/'><h2>Anime Bundle 📦</h2></Link>
                <p>V <span>0.0.0-dev</span></p>
            </div>
            <Navbar />
        </header>
    )
}

export default Header