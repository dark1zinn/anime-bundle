import './AnimeInfo.css'

const AnimeInfo = ({ payload }: any) => {
    return (
        <div className="anime-info">
            <img src={payload.image} />
            <div className="about">
                <h3 className="title">{payload.title}</h3>
                <p className="description">{payload.description}</p>
                <div className="other">
                    <p>Titulo alternativo: {payload.alternativeTitle}</p>
                    <p>Ano de lançamento: {payload.year}</p>
                    <p>Studio: {payload.studio}</p>
                    <p>Estado: {payload.state}</p>
                    <p>Audio: {payload.audio}</p>
                    <p>Qualidade: {payload.quality}</p>
                    <p>Episodios: {payload.episodeCount}</p>
                    <p>Duração media: {payload.durationPerEp}</p>
                </div>
            </div>
        </div>
    )
}

export default AnimeInfo