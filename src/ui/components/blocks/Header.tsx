import { Link } from "react-router-dom"
import './Header.css'
import SearchBar from "../SearchBar"
import IconDefaultProfile from "../../assets/icons-svg/icon-DefaultProfile"

const Header = () => {
    return (
        <header>
            <div>
                <Link to='/'><h2>Anime Bundle 📦</h2></Link>
            </div>
            <SearchBar />
            <IconDefaultProfile />
        </header>
    )
}

export default Header