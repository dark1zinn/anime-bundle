import { Link } from 'react-router-dom'
import './css/Development.css'

const Development = () => {
    return (
        <div id="page-development">
            <h2>Development</h2>
            <p>The purpose is to access pages that shouldn't be possible to access manualy.</p>
            <br />
            <div className='dev-options'>
                <p><Link to='/' className='span-anchor'>Homepage</Link>: Gets you back to the homepage.</p>
                <p><Link to='/search' className='span-anchor'>Animes search page</Link>: Search page.</p>
                <p><Link to='/error' className='span-anchor'>Error</Link>: Default error page.</p>
                <p><Link to='*' className='span-anchor'>NoMatch</Link>: NoMatch error page. < i title = 'This page auto redirects towards homepage after a few seconds.' >i</i ></p >
            </div>
        </div>
    )
}

export default Development