import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import AOPlayer from "../components/AOPlayer"
import './css/AnimeProfile.css'
import { getSingleAnime } from "../utils/utils"
import AnimeInfo from "../components/AnimeInfo"
import Loading from "../components/Loading"

const AnimeProfile = () => {
    const [anime, setAnime] = useState<any | null>(null)
    let location = useLocation()
    // const { link } = location.state
    // console.log(link)

    useEffect(() => {
        setAnime(null)
        const fetchData = async () => {
            const promise = new Promise<any>((resolve) => {
                setTimeout(async () => {
                    const anime = await getSingleAnime(location.state.link);
                    resolve(anime);
                }, 2500);
            });

            const data = await promise;
            setAnime(data);
        };

        fetchData();
    }, [])

    return (
        <div id="mediaprofile-page">
            {!anime ? (<Loading />) : (<AnimeInfo payload={anime} />)}
        </div>
    )
}

export default AnimeProfile