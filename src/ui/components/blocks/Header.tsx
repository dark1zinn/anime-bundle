import { Link } from "react-router-dom"
import './Header.css'
import SearchBar from "../SearchBar"

const Header = () => {
    return (
        <header>
            <div>
                <Link to='/'><h2>Anime Bundle 📦</h2></Link>
            </div>
            <SearchBar />
        </header>
    )
}

export default Header