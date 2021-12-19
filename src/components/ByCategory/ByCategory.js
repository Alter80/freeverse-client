import React, { useEffect, useState } from 'react';
import { Row, Tab, Tabs } from 'react-bootstrap';
import Allgame from '../AllGame/Allgame';
import './ByCategory.css';

const ByCategory = () => {
    const [gamesByCategory, setGamesByCategory] = useState([])
    const [key, setKey] = useState('MMORPG');

    const url = `https://serene-garden-71214.herokuapp.com/games/genre/${key}`
    // console.log(url)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setGamesByCategory(data))

    }, [gamesByCategory])

    // console.log(gamesByCategory);

    return (
        <div className='my-5  container w-75'>
            <h3>Browse Games by Category</h3>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className=" my-3 "

            >
                <Tab eventKey="MMORPG" title="MMORPG" className='' >
                    <Row xs={1} md={2} className="g-3">
                        {Array.from({ length: 1 }).map((_, idx) => (

                            gamesByCategory.map(game => <Allgame
                                key={game.id}
                                game={game}></Allgame>)

                        ))}
                    </Row>
                </Tab>

                <Tab eventKey="Shooter" title="Shooter" className=''>
                    <Row xs={1} md={2} className="g-3">
                        {Array.from({ length: 1 }).map((_, idx) => (

                            gamesByCategory.map(game => <Allgame
                                key={game.id}
                                game={game}></Allgame>)

                        ))}
                    </Row>
                </Tab>

                <Tab eventKey="Card Game" title="Card Game" >
                    <Row xs={1} md={2} className="g-3">
                        {Array.from({ length: 1 }).map((_, idx) => (

                            gamesByCategory.map(game => <Allgame
                                key={game.id}
                                game={game}></Allgame>)

                        ))}
                    </Row>
                </Tab>

                <Tab eventKey="MMO" title="MMO" >
                    <Row xs={1} md={2} className="g-3">
                        {Array.from({ length: 1 }).map((_, idx) => (

                            gamesByCategory.map(game => <Allgame
                                key={game.id}
                                game={game}></Allgame>)

                        ))}
                    </Row>
                </Tab>

                <Tab eventKey="Social" title="Social" >
                    <Row xs={1} md={2} className="g-3">
                        {Array.from({ length: 1 }).map((_, idx) => (

                            gamesByCategory.map(game => <Allgame
                                key={game.id}
                                game={game}></Allgame>)

                        ))}
                    </Row>
                </Tab>
            </Tabs>
        </div>

    );
};

export default ByCategory;