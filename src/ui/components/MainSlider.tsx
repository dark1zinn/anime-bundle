import AnimeCard from './AnimeCard'
import './MainSlider.css'

const MainSlider = ({payload}: any) => {
    return (
        <div className="main-slider">
            {payload.map((anime: any) => {
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

export default MainSlider