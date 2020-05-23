import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'


import './Sidebar.css'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Sidebar = () => {
    return (
        <nav className='Sidebar'>
            <ul className='r-side-nav'>
                <li className='r-nav-logo'>
                    <Link to='/' className='r-nav-link active'>
                        <span className='r-link-text'>Announce IT</span>
                        <FontAwesomeIcon className='r-link-icon' icon={faBullhorn} />
                    </Link>
                </li>
                <SignedInLinks />
                {/* <SignedOutLinks /> */}
            </ul>
        </nav >
    )
}

export default Sidebar;
