import { useEffect, useState } from 'react'
import MainContents from '../components/blocks/MainContents'
import './css/Home.css'

const Home = () => {
    const [user, setUser] = useState<any>(null)  //set interface for user later
    let greetings = 'bem-vindo'
    
    useEffect(() => {                           // temporary use, should be moved to App.tsx later, and be provided via a context,
        const getUser = { name: 'usuario' }
        if (getUser) {
            setUser(getUser)
        } else {
            console.log("Haven't found a user")
        }
    }, [])

    return (
        <div id="page-home">
            <h2>Oi, <span>{user ? (user.name) : (greetings) }</span>!</h2>
            <p>Pronto para novos episodios?</p>
            <MainContents />
        </div>
    )
}

export default Home