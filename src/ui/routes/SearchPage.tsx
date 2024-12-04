import './css/SearchPage.css'
import { fetchAnimes } from '../utils/utils'
import { Suspense, useEffect, useState } from 'react'
import AnimeResults from '../components/AnimeResults'

// const data = await fetchAnimes()

// Later figure out a way to implement a loading state for pending ui since Suspense isn't triggering

const SearchPage = () => {
    // const animes = data

    const [animes, setAnimes] = useState<{ title: string, image: string, link: string, quality: string, audio: string, episodes: string }[]>()
    //console.log(animes)
    useEffect(() => {
        setTimeout(async () => {
            setAnimes(await fetchAnimes())     // both useState and useEffect are for test purposes only to simulate a fetch delay
        }, 2500)
    }, [])


    return (
        <div id="page-animes">
            <Suspense fallback={<div className='page-animes-loading'><h2>Loading...</h2></div>}>
                {animes && <AnimeResults resultsData={animes} />}
            </Suspense>
        </div>
    )
}

export default SearchPage