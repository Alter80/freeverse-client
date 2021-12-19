import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../redux/slices/gameSlice';
import Allgame from '../AllGame/Allgame';

const FeaturedGames = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGames());
    }, [])

    function onLinkClick(e) {
        e.preventDefault();
        // further processing happens here
    }


    const allgames = useSelector((state) => state.gameCounter.allitems);
    console.log(allgames);

    // shuffling the objects
    const featuredGames = allgames.slice().sort((a, b) => 0.5 - Math.random())
    console.log(featuredGames);


    return (
        <div className='p-3'>
            <h3>All games list</h3>
            <Row xs={1} md={3} onClick={() => onLinkClick} className="g-3">
                {Array.from({ length: 1 }).map((_, idx) => (

                    featuredGames.slice(0, 9).map(game => <Allgame
                        key={game.id}
                        game={game}></Allgame>)

                ))}
            </Row>
        </div>
    );
};

export default FeaturedGames;