import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeaturedGames from '../FeaturedGames/FeaturedGames';
import Banner from './Banner/Banner';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <h2>Browse All Games</h2>
            <FeaturedGames></FeaturedGames>
            <Link to='/bycategory'> <Button data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
                data-aos-offset="0" className='main-btn btn-sm my-2' variant="outline-light">Browse By Category</Button></Link>

        </div>
    );
};

export default Home;