import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const SignedOutLinks = () => {
    return (
        <React.Fragment>
            <li className='r-nav-item'>
                <NavLink to='/signIn' exact className='r-nav-link'>
                    <FontAwesomeIcon className='r-link-icon' icon={faSignInAlt} />
                    <span className='r-link-text'>Sign In</span>
                </NavLink>
            </li>
            <li className='r-nav-item'>
                <NavLink to='/signUp' exact className='r-nav-link'>
                    <FontAwesomeIcon className='r-link-icon' icon={faUserPlus} />
                    <span className='r-link-text'>Sign Up</span>
                </NavLink>
            </li>
        </React.Fragment>
    )
}

export default SignedOutLinks
