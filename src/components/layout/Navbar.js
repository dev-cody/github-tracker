import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar bg-primary">
            <Link to='/'>
                <h1>
                    <i className={icon} /> {title}
                </h1>
            </Link>
            <ul>
                <li>
                    {/* Using link here since an a tag will remove state on the previous components */}
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )

}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
