import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, PlayCircle } from 'react-feather'

const Stories = () => {

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
                <span className='highlight highlight-info'>showcase</span>{' '}
                your Booking Service App
            </h1>
            <p className='text-light'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
            <div className="mt-3 d-flex align-items-center">
                <Link to="/" className="btn btn-primary">
                    Download
                </Link>
                <div className="ms-3">
                    <Link className="text-primary d-flex align-items-center" to="/">
                        <Button className="btn-soft-light btn-rounded-circle me-2">
                            <PlayCircle />
                        </Button>
                        <span className="fw-semibold text-light">Watch Video</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Stories