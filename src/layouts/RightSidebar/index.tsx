import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// data
import { menus } from './data'

const RightSidebar = () => {

    const [activeMenuItems, setActiveMenuItems] = useState<any>([])
    const navigate = useNavigate()

    let location = useLocation()

    useEffect(() => {
        let url = location.pathname
        setActiveMenuItems(url.toString().split('/').slice(1))
    }, [location])

    const handleClick = (currentMenu: any) => {
        for (let menu of menus) {
            if (menu.title === currentMenu.title) {
                navigate(`${menu.link}`)
            }
        }
    }

    return (
        <>
            <div className='right-sidebar'>
                <div id='sidebar-menu'>
                    <ul className='side-menu'>
                        {(menus || []).map((menu, index) => {
                            return (
                                <li
                                    className={
                                        classnames(
                                            'side-menu-item',
                                            `bg-${menu.background_color}`,
                                            activeMenuItems.includes(menu.link) ? 'menu-item-active' : ''
                                        )
                                    }
                                    key={index}
                                    onClick={() => handleClick(menu)}
                                >
                                    <div
                                        className='side-menu-link'
                                    >
                                        <h1 className={
                                            classnames(
                                                'menu-title',
                                                `text-${menu.color}`
                                            )
                                        }>
                                            {menu.title}
                                        </h1>
                                        <p className={
                                            classnames(
                                                'menu-subtitle',
                                                `text-${menu.color}`
                                            )
                                        }>
                                            {menu.description}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RightSidebar