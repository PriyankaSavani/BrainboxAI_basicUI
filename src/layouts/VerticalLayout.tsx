import React from 'react'
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

// componenet
import Topbar from './Topbar'
import RightSidebar from './RightSidebar'

const VerticalLayout = () => {
    return (
        <div id='wrapper'>
            <Topbar />
            <RightSidebar />
            <div className='content-page'>
                <div className='content'>
                    <Container>
                        <Outlet />
                        <div className='cube'></div>
                        <div className='cube'></div>
                        <div className='cube'></div>
                        <div className='cube'></div>
                        <div className='cube'></div>
                        <div className='cube'></div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default VerticalLayout