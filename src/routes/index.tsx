import React from 'react'
import { useRoutes } from 'react-router-dom'

// layout
const Layout = React.lazy(() => import('../layouts/VerticalLayout'))

// pages
const Home = React.lazy(() => import('../pages/Home'))
const Explore = React.lazy(() => import('../pages/Explore'))
const Stories = React.lazy(() => import('../pages/Stories'))
const About = React.lazy(() => import('../pages/About'))
const Help = React.lazy(() => import('../pages/Help'))

const AllRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/explore', element: <Explore /> },
                { path: '/stories', element: <Stories /> },
                { path: '/about', element: <About /> },
                { path: '/help', element: <Help /> }
            ]
        }
    ])
}

export default AllRoutes