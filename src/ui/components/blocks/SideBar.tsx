import { NavLink } from "react-router-dom";
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="side-bar">
            <h4>Navigation</h4>
            <div className="side-bar-contents">
                <div className="side-bar-navigation">
                    <NavLink to='/'><span>Home</span></NavLink>
                    <NavLink to='search'><span>Animes</span></NavLink>
                    <NavLink to='about'><span>About</span></NavLink>
                    <NavLink to='/error'><span>Error</span></NavLink>
                </div>


                <i title="Versão do app">V 0.0.0-dev</i>
            </div>


        </div>
    )
}

export default SideBar