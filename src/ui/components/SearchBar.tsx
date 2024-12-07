import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import './SearchBar.css'

const SearchBar = () => {
    const [search, setSearch] = useState<string | null>(null);
    const navigate = useNavigate();
    let location = useLocation();
    let [searchParams] = useSearchParams();

    useEffect(() => {
        if (!search || search == ' ') { return }
        
        if (location.pathname != '/search') {
            navigate(`/search?name=${search}`)
        } else if (location.pathname == '/search') {
            searchParams.set('name', search)
            // console.log(searchParams.get('name'))
        }

    }, [search])

    return (
        <div id='search-bar'>
            <input type="search" name='searchBar' placeholder='Pesquise animes 🔍' onKeyDown={(e) => { if (e.key === "Enter") { setSearch(e.target.value) } }} />
        </div>
    )
}

export default SearchBar