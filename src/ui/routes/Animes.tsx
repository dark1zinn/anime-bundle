import './css/Animes.css'
import AnimeCard from '../components/AnimeCard'
import { fetchAnimes } from '../utils/utils'
import { useEffect, useState } from 'react'


const Animes = () => {
    const [animes, setAnimes] = useState<{ title: string, image: string, link: string, quality: string, audio: string, episodes: string }[]>([])

    useEffect(() => {
        setTimeout(async () => {
            //@ts-ignore
            const animes: {title: string, image: string, link: string, quality: string, audio: string, episodes: string}[] = await window.electron.getAnimes()
            setAnimes(animes)
        }, 1500)
    }, [])

    console.log(animes)
    return (
        <div id="page-animes">
            <div id='results'>
            {
                animes.map((anime: any) => {
                    return (
                        <AnimeCard
                            title={anime.title}
                            image={anime.image}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Animes