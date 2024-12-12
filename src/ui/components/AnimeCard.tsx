import { Link } from "react-router-dom"
import './AnimeCard.css'

const AnimeCard = ({ payload }: any) => {
    const slugName: string = payload.title
    // slugName.toLowerCase().replace(' ', '-')
    // console.log(slugName)                // string formatting not working, figure it later
    return (
        <div className="anime-card">
            <Link title={payload.title} to={`/anime/${slugName}`}>
                <h4>{payload.title}</h4>
                <img src={payload.image} loading='lazy' />
            </Link>
        </div>
    )
}

export default AnimeCard