import { Link, Outlet } from "react-router-dom"
import './css/Profile.css'

const Profile = () => {
    return (
        <div id="page-profile">
            <h2>Perfil</h2>
            <h2>Ainda em desenvolvimento!</h2>
            <p>Volte para a <Link className="span-anchor" to='/'>Homepage</Link>!</p>
            <Outlet />
        </div>
    )
}

export default Profile