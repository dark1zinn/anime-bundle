import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import './SearchBar.css'
import { SearchContext } from '../App';

const SearchBar = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let [searchParams] = useSearchParams();
    const {search, setSearch} = useContext(SearchContext)

    useEffect(() => {
        if (!search || search == ' ') { return }
        
        if (location.pathname != '/search') {
            navigate(`/search?name=${search}`)
        } else if (location.pathname == '/search') {
            searchParams.set('name', search)
            console.log(searchParams.get('name'))
        }

    }, [search])


    // TO-DO: fix this 'error'
    return (
        <div id='search-bar'>
            <input type="search" name='searchBar' placeholder='Pesquise animes 🔍' onKeyDown={
                // @ts-ignore
                (e) => { if (e.key === "Enter") { setSearch(e.target.value) } }
            } />
        </div>
    )
}

export default SearchBar