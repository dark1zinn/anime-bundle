import { useContext, useEffect, useState } from 'react';
import AnimeResults from '../components/AnimeResults';
import { fetchAnimes } from '../utils/utils';
import './css/SearchPage.css';
import Loading from '../components/Loading';
import { useSearchParams } from 'react-router-dom';
import { SearchContext } from '../App';

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
    const [searchParams] = useSearchParams()

    const { search, setSearch } = useContext(SearchContext)

    useEffect(() => {
        setAnimes(null)
        const fetchData = async () => {
            const promise = new Promise<Anime[]>((resolve) => {
                setTimeout(async () => {
                    // console.log(search)
                    const animes = await fetchAnimes();
                    resolve(animes);
                }, 2500);
            });

            const data = await promise;
            setAnimes(data);
        };

        fetchData();
    }, [search]);

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
