import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'react-feather';

// data
import { topMenus } from './data'

const Topbar = () => {
    return (
        <div className='navbar-custom'>
            <div id='topnav-menu'>
                <ul className='top-menu'>
                    <li className='top-menu-item'>
                        <Search />
                    </li>
                    {(topMenus || []).map((topMenu, index) => {
                        return (
                            <li
                                className='top-menu-item'
                                key={index}
                            >
                                <Link
                                    className='top-menu-link'
                                    to={topMenu.link}
                                >
                                    {topMenu.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Topbar