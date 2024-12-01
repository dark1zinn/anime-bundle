import './css/Animes.css'
import { fetchAnimes } from '../utils/utils'
import { Suspense, useEffect, useState } from 'react'
import { Await } from 'react-router-dom'
import { lazy } from 'react'
import AnimeCard from '../components/AnimeCard'
const AnimeResults = lazy(() => import('../components/AnimeResults'))

// const data = await fetchAnimes()

// Later figure out a way to implement a loading state for pending ui

const Animes = () => {
    // const animes = data

    const [animes, setAnimes] = useState<{ title: string, image: string, link: string, quality: string, audio: string, episodes: string }[]>()
    //console.log(animes)
    useEffect(() => {
        setTimeout(async () => {
            setAnimes(await fetchAnimes())     // both useState and useEffect are for test purposes only to simulate a fetch delay
        }, 1500)
    }, [])


    return (
        <div id="page-animes">
            {animes && <AnimeResults resultsData={animes} />}
        </div>
    )
}

export default Animes