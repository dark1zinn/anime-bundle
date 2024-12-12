import { Link, useNavigate } from "react-router-dom"
import './AnimeCard.css'

const AnimeCard = ({ payload }: any) => {
    const slugName: string = payload.title
    // slugName.toLowerCase().replace(' ', '-')
    // console.log(slugName)                // string formatting not working, figure it later

    const navigate = useNavigate()

    return (
        <div className="anime-card">
            <a title={payload.title} onClick={() => navigate(`/anime/${slugName}`, {state: {link: payload.link}})}>
                <h4>{payload.title}</h4>
                <img src={payload.image} loading='lazy' />
            </a>
        </div>
    )
}

export default AnimeCard