import { Link } from "react-router-dom"
import SearchBar from "../SearchBar"
import UserButton from "../UserButton"
import './Header.css'

const Header = () => {
    return (
        <header>
            <div>
                <Link to='/'><h2>Anime Bundle 📦</h2></Link>
            </div>
            <SearchBar />
            <UserButton />
        </header>
    )
}

export default Header