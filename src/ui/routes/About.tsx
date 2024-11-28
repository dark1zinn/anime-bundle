import { linkTo } from '../utils/utils'
import './css/About.css'

const About = () => {
    return (
        <div id="page-about">
            <h1>Sobre</h1>
            <p>Visite o repositorio do Anime Bundle no <span onClick={() => linkTo('https://github.com/dark1zinn/anime-bundle')}>Github</span>!</p>
        </div>
    )
}

export default About