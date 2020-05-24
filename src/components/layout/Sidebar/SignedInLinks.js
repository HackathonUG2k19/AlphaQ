import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBooth, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const SignedOutLinks = () => {
    return (
        <React.Fragment>
            <li className='r-nav-item'>
                <Link to='/' className='r-nav-avatar'>
                    <button className='avatar'>RK</button>
                    <span className='r-link-text'>Ritvik Aryan Kalra</span>
                </Link>
            </li>
            <li className='r-nav-item'>
                <NavLink to='/joinRoom' exact className='r-nav-link'>
                    <FontAwesomeIcon className='r-link-icon' icon={faPersonBooth} />
                    <span className='r-link-text'>Join Room</span>
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
