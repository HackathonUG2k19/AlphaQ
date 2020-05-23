import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBooth, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const SignedOutLinks = () => {
    return (
        <React.Fragment>
            <li className='r-nav-item'>
                <a href='/' className='r-nav-avatar' onClick={(e) => e.preventDefault()}>
                    <button className='avatar'>DK</button>
                    <span className='r-link-text'>Dhruv Kapur</span>
                </a>
            </li>
            <li className='r-nav-item'>
                <NavLink to='/' exact className='r-nav-link'>
                    <FontAwesomeIcon className='r-link-icon' icon={faPersonBooth} />
                    <span className='r-link-text'>My Rooms</span>
                </NavLink>
            </li>
            <li className='r-nav-item'>
                <NavLink to='/createRoom' exact className='r-nav-link'>
                    <FontAwesomeIcon className='r-link-icon' icon={faPlus} />
                    <span className='r-link-text'>Create New Room</span>
                </NavLink>
            </li>
            <li className='r-nav-item push-end'>
                <NavLink to='/signOut' exact className='r-nav-link'>
                    <FontAwesomeIcon className='r-link-icon' icon={faSignOutAlt} />
                    <span className='r-link-text'>Sign Out</span>
                </NavLink>
            </li>
        </React.Fragment>
    )
}

export default SignedOutLinks
