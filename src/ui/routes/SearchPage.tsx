import { useEffect, useState } from 'react';
import AnimeResults from '../components/AnimeResults';
import { fetchAnimes } from '../utils/utils';
import './css/SearchPage.css';

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
        }, 1000);
      });

      const data = await promise;
      setAnimes(data);
    };

    fetchData();
  }, []);

  return (
    <div id="page-animes">
      {!animes ? (
        <div className="page-animes-loading">
          <h2>Carregando...</h2>
        </div>
      ) : (
        <AnimeResults resultsData={animes} />
      )}
    </div>
  );
};

export default SearchPage;
