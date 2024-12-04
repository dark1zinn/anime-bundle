import { linkTo } from '../utils/utils'
import './css/About.css'
import '../assets/css/cssUtils.css'
import IconExternalLink from '../assets/icons-svg/icon-externalLink.tsx'

const About = () => {
    return (
        <div id="page-about">
            <h1>Sobre</h1>
            <p>
                Visite o repositorio do Anime Bundle no <span className='span-anchor' onClick={() => linkTo('https://github.com/dark1zinn/anime-bundle')}>
                    Github<IconExternalLink />
                </span>!
            </p>
        </div>
    )
}

export default About