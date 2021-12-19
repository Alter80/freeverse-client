import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchGames } from '../../redux/slices/gameSlice';
import Allgame from '../AllGame/Allgame';

const AllGames = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGames());
    }, [])


    const allgames = useSelector((state) => state.gameCounter.allitems);
    console.log(allgames);

    return (
        <div className='p-3'>
            <h3 className='mb-3'>All games list</h3>
            <Row xs={1} md={3} className="g-3">
                {Array.from({ length: 1 }).map((_, idx) => (

                    allgames.map(game => <Allgame
                        key={game.id}
                        game={game}></Allgame>)

                ))}
            </Row>
        </div>
    );
};

export default AllGames;