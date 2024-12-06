import SpinerAnimedSpiningGear from "../../assets/spiners-animedSvg/spiner-SpiningGear"
import './Loading.css'

const Loading = () => {
    return (
        <div className='block-loading'>
            <SpinerAnimedSpiningGear />
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading