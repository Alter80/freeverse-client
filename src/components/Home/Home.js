import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeaturedGames from '../FeaturedGames/FeaturedGames';
import Banner from './Banner/Banner';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <h3>Browse All Games</h3>
            <FeaturedGames></FeaturedGames>
            <Link to='/bycategory'> <Button className='main-btn btn-sm my-2' variant="outline-light">Browse By Category</Button></Link>

        </div>
    );
};

export default Home;