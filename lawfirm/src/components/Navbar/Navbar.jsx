import React from 'react'
import style from './Navbar.module.css'
import { ReactComponent as AppLogo } from '../../assets/appLogo.svg'

const Navbar = () => {
    return (
        <div className={style.wrapperContainer}>
            <div>
                <AppLogo />
            </div>
            <div className={style.navigation}>
                <ul>
                    <li>Home</li>
                    <li>Attorneys</li>
                    <li>Practice Areas</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div>
                <button type="button" className={style.contactName}>
                    Contact Now
                </button>
            </div>
        </div>
    )
}

export default Navbar
