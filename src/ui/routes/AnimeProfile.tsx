import { useLocation } from "react-router-dom"
import AOPlayer from "../components/AOPlayer"
import './css/AnimeProfile.css'

const AnimeProfile = () => {
    let location = useLocation()
    const { link } = location.state
    console.log(link)

    return (
        <div id="mediaprofile-page">
            <div className="info">
                <img src="https://animesonlinecc.to/wp-content/uploads/2019/09/7sjz43r1dkBpvecDMiiRVNYVllb-185x278.jpg" alt="nanas" />
                <div className="about">
                    <h3 className="title">Nanatsu No Taizai</h3>
                    <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime iure, omnis qui eligendi sunt totam. Dolorem perspiciatis soluta facilis voluptatum itaque ex ullam rem tempore, nam officiis veritatis, alias officia.</p>
                    <div className="other">
                        <p>Titulo alternativo: titulo</p>
                        <p>Ano de lançamento: 1999</p>
                        <p>Studio: Kadokawas</p>
                        <p>Estado: Completo</p>
                        <p>Audio: LEG</p>
                        <p>Qualidade: HD</p>
                        <p>Episodios: 9999</p>
                        <p>Duração media: 24 min per ep</p>
                    </div>
                </div>
            </div>
            <div className="media-player">
                <AOPlayer />
            </div>
        </div>
    )
}

export default AnimeProfile