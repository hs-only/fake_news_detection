import React from 'react';
import { Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div className='nav'>
            <img alt='logo' src="https://github.com/hs-only/project-images/blob/main/logo.jpeg?raw=true" className='logo' />
            <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}
export default Nav;