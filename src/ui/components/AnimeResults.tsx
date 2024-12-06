import AnimeCard from "./AnimeCard"
import './AnimeResults.css'

const AnimeResults = ({ resultsData }: any) => {
    return (
        <div id='results'>
            {resultsData.map((anime: any) => {
                return (
                    <AnimeCard
                        key={crypto.randomUUID()}
                        payload={anime}
                    />
                )
            })}
        </div>
    )
}

export default AnimeResults