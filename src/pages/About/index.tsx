import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { ArrowDown, ArrowLeft } from 'react-feather'

const About = () => {

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
                A modern look and feel your marketing
            </h1>
            <p className='text-light'>
                Make your website or web application stand out with high-quality landing pages designed and developed by professionals.
            </p>
            <div className='mt-3'>
                <Button className='me-2'>View Demos<ArrowDown className='ms-1' /></Button>
                <Link to={''} className='text-light'>Documentation</Link>
            </div>
        </div>
    )
}

export default About