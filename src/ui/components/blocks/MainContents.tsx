import { useEffect, useState } from 'react'
import MainSlider from '../MainSlider'
import './MainContents.css'
import { getAnimes } from '../../utils/utils'
import Loading from '../Loading';

interface Anime {
    title: string;
    image: string;
    link: string;
    quality: string;
    audio: string;
    episodes: string;
}

const MainContents = () => {
    const [featuredAnimes, setFeaturedAnimes] = useState<any | null>(null)
    const [newEpisodesAnimes, setNewEpisodesAnimes] = useState<any | null>(null)

    useEffect(() => {
        setFeaturedAnimes(null)
        setNewEpisodesAnimes(null)
        const fetchData = async () => {
            const promise = new Promise<Anime[]>((resolve) => {
                setTimeout(async () => {
                    const animes = await getAnimes('naruto');  //for test purposes, must change it later
                    resolve(animes);
                }, 2500);
            });

            const data = await promise;
            setNewEpisodesAnimes(data);
            setFeaturedAnimes(data);
        };

        fetchData();
    }, [])

    return (
        <div className='main-contents'>
            <div className='slider-animes'>
                <h3>Novos episodios</h3>
                {!newEpisodesAnimes ? (<Loading />) : (<MainSlider payload={newEpisodesAnimes} />)}
            </div>
            <div className='slider-animes'>
                <h3>Animes do momento</h3>
                {!featuredAnimes ? (<Loading />) : (<MainSlider payload={featuredAnimes} />)}
            </div>
        </div>
    )
}

export default MainContents