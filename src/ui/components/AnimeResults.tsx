import { Suspense } from "react"
import AnimeCard from "./AnimeCard"
import './AnimeResults.css'

const AnimeResults = ({ resultsData }: any) => {
    return (
        <div id='results'>
            <Suspense fallback={<h1>Loading...</h1>}>
                {resultsData.map((anime: any) => {
                    return (
                        <AnimeCard
                            key={crypto.randomUUID()}
                            payload={anime}
                        />
                    )
                })}
            </Suspense>
        </div>
    )
}

export default AnimeResults