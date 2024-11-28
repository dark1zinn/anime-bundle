import AOPlayer from "../components/AOPlayer"
import './css/MediaProfile.css'

const MediaProfile = () => {
    return (
        <div id="mediaprofile-page">
            <div className="info">
                <img src="https://animesonlinecc.to/wp-content/uploads/2019/09/7sjz43r1dkBpvecDMiiRVNYVllb-185x278.jpg" alt="nanas" />
                <div className="about">
                    <h3 className="title">Nanatsu No Taizai</h3>
                    <p className="lore">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime iure, omnis qui eligendi sunt totam. Dolorem perspiciatis soluta facilis voluptatum itaque ex ullam rem tempore, nam officiis veritatis, alias officia.</p>
                </div>
            </div>
            <div className="media-player">
                <AOPlayer />
            </div>
        </div>
    )
}

export default MediaProfile