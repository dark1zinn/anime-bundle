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
                <Link to=''>
                    <li>Perfil</li>
                </Link>
                <Link to=''>
                    <li>Configurações</li>
                </Link>
                <Link to=''>
                    <li>SlepNaTchecaPerereca</li>
                </Link>
                <Link to=''>
                    <li>jshhdecbvjb\sjdbsdbkdvbsjjck</li>
                </Link>
            </ul>
        </details>
    )
}

export default UserButton