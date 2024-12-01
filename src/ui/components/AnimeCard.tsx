import { Link } from "react-router-dom"
import { Suspense } from "react"
import './AnimeCard.css'

const AnimeCard = ({payload}: any) => {
    //const slug: string = '/animes/' + title.toLowerCase().replace(' ', '-')
    return (
        <div className="anime-card">
            <Suspense fallback={
                <div className="loading-card">
                <h4 className="loading-card-title"></h4>
                <div className="loading-card-image"></div>
            </div>}>
                    <Link title={payload.title} to='nanas'>
                        <h4>{payload.title}</h4>
                        <img src={payload.image} loading='lazy' />
                    </Link>
            </Suspense>
        </div>
    )
}

export default AnimeCard