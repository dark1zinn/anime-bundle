import { Link } from "react-router-dom"
import './AnimeCard.css'

const AnimeCard = ({ payload }: any) => {
    //const slug: string = '/animes/' + title.toLowerCase().replace(' ', '-')   // TO-DO later move the slug generation to the app-backend
    return (
        <div className="anime-card">
            <Link title={payload.title} to='/anime/nanas'>
                <h4>{payload.title}</h4>
                <img src={payload.image} loading='lazy' />
            </Link>
        </div>
    )
}

export default AnimeCard