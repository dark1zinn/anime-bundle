import { Outlet } from 'react-router-dom'
import Header from './components/blocks/Header'
import SideBar from './components/blocks/SideBar'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className='home-view'>
        <SideBar />
        <Outlet />
      </div>
    </>
  )
}

export default App
