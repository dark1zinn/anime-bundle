import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/blocks/Header'
import SideBar from './components/blocks/SideBar'
import './App.css'

export const SearchContext = createContext<any>(null)

function App() {
  const [search, setSearch] = useState<string | null>(null);

  return (
    <>
      <SearchContext.Provider
        value={{
          search,
          setSearch
        }}
      >
        <Header />
        <div className='home-view'>
          <SideBar />
          <Outlet />
        </div>
      </SearchContext.Provider>
    </>
  )
}

export default App
