import { Link } from "react-router-dom"
import './AnimeCard.css'

const AnimeCard = () => {
    return (
        <div className="anime-card">
            <h4>Nanatsu No Taizai</h4>
            <Link to="/animes/nanatsu-no-taizai">
                <img src="https://animesonlinecc.to/wp-content/uploads/2019/09/7sjz43r1dkBpvecDMiiRVNYVllb-185x278.jpg" alt='nanas' />
            </Link>
        </div>
    )
}

export default AnimeCard