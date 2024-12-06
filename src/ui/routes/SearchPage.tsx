import { useEffect, useState } from 'react';
import AnimeResults from '../components/AnimeResults';
import { fetchAnimes } from '../utils/utils';
import './css/SearchPage.css';
import Loading from '../components/blocks/Loading';

interface Anime {
    title: string;
    image: string;
    link: string;
    quality: string;
    audio: string;
    episodes: string;
}

const SearchPage = () => {
    const [animes, setAnimes] = useState<Anime[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const promise = new Promise<Anime[]>((resolve) => {
                setTimeout(async () => {
                    const animes = await fetchAnimes();
                    resolve(animes);
                }, 2500);
            });

            const data = await promise;
            setAnimes(data);
        };

        fetchData();
    }, []);

    return (
        <div id="page-search">
            {!animes ? (
                <Loading />
            ) : (
                <AnimeResults resultsData={animes} />
            )}
        </div>
    );
};

export default SearchPage;
