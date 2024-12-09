import { Link } from "react-router-dom"
import IconDefaultProfile from "../assets/icons-svg/icon-DefaultProfile"
import './UserButton.css'

const UserButton = () => {
    return (
        <details className="user-button">
            <summary>
                <IconDefaultProfile />
            </summary>
            <ul>
                <Link to='/profile'>
                    <li>Perfil</li>
                </Link>
                <Link to='/profile/settings'>
                    <li>Configurações</li>
                </Link>
                <Link to='profile/stats'>
                    <li>Status</li>
                </Link>
                <hr />
                <Link to=''>
                    <li>jshhdecbvjb\sjdbsdbkdv</li>
                </Link>
            </ul>
        </details>
    )
}

export default UserButton