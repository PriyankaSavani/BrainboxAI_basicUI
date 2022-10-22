import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'react-feather'

const Help = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/")
    }

    return (
        <div>
            <Button
                className='btn-soft-light btn-rounded-circle'
                onClick={handleBack}
            >
                <ArrowLeft />
            </Button>
            <h1 className='text-light'>
                The best way to{' '}
                <span className='highlight highlight-success'>showcase</span>{' '}
                your saas
            </h1>
            <p className='text-light'>
                Make your saas application stand out with high-quality landing page designed and
                developed by professional
            </p>
            <div className="mt-3">
                <Row className="g-2 text-start">
                    <Col md={4} lg={6}>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Col>
                    <Col sm={3}>
                        <div>
                            <Button variant='outline-light' className="mb-2">Sign Up</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Help