import { Link } from "react-router-dom";
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="side-bar">
            <h4>Navigation</h4>
            <div className="side-bar-contents">
                <div className="side-bar-navigation">
                    <Link to='/'><span>Home</span></Link>
                    <Link to='animes'><span>Animes</span></Link>
                    <Link to='about'><span>About</span></Link>
                    <Link to='/error'><span>Error</span></Link>
                </div>


                <i title="Versão do app">V 0.0.0-dev</i>
            </div>


        </div>
    )
}

export default SideBar