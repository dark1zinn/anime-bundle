import { NavLink } from "react-router-dom";
import './SideBar.css'
import IconHome from "../../assets/icons-svg/icon-Home";

const SideBar = () => {
    return (
        <div className="side-bar">
            <h4>Navigation</h4>
            <div className="side-bar-contents">
                <div className="side-bar-navigation">
                    <NavLink to='/'><IconHome /><span>Home</span></NavLink>
                    <NavLink to='about'><span>About</span></NavLink>
                    <NavLink to='/dev'><span>Dev tests</span></NavLink>
                </div>


                <i title="Versão do app">V 0.0.0-dev</i>
            </div>


        </div>
    )
}

export default SideBar