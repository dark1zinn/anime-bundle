import { Link } from "react-router-dom"
import './AnimeCard.css'

const AnimeCard = ({ title, image }: {title: string, image: string}) => {
    //const page: string = '/animes/' + title.toLowerCase().replace(' ', '-')
    //console.log(page)
    return (
        <div className="anime-card">
            <Link title={title} to=''>
                <h4>{title}</h4>
                <img src={image} loading='lazy' />
            </Link>
        </div>
    )
}

export default AnimeCard