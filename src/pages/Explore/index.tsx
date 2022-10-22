import { Button } from 'react-bootstrap'
import { ArrowLeft } from 'react-feather'
import { useNavigate } from 'react-router-dom'

const Explore = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/")
    }

    return (
        <>
            <div>
                <Button
                    className='btn-soft-light btn-rounded-circle'
                    onClick={handleBack}
                >
                    <ArrowLeft />
                </Button>
                <h1 className='text-light'>
                    It's never too late to try something new
                </h1>
                <p className='text-light'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <Button variant="outline-light" className='mt-3'>Book Now</Button>
            </div>
        </>
    )
}

export default Explore