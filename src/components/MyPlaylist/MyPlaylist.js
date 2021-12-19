import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPlaylist } from '../../redux/slices/gameSlice';

const MyPlaylist = () => {


    const selectedGames = useSelector((state) => state.gameCounter.playList);
    console.log(selectedGames);
    /* 
        const playlist = () => Object.keys(selectedGames).forEach((values) => {
            console.log(selectedGames[values]);
    
            const { id, developer, game_url, genre, platform, publisher, release_date, short_description, thumbnail, title } = selectedGames[values]
    
            return (
                <div className="col p-1">
                    <div className="card d-md-flex flex-md-row align-items-center bg-dark shadow-sm h-100">
    
                        <div>
                            <img src={thumbnail} alt="gaming" className="mt-2 card-img-top rounded img-fluid " height='180px' />
                        </div>
                        <div className="card-body d-flex flex-column align-items-center">
                            <strong className="d-inline-block mb-2 text-white m-auto small">Platform: {platform}</strong>
    
                            <div className="mb-1 mx-auto text-muted small">
                                <p>Publisher: {publisher}; <br /> Release date: {release_date}</p>
                                <h4 className="text-white">{title}</h4>
                            </div>
    
                            <p className="card-text m-auto text-muted small">
                                Dev: {developer} <br />
                                Genre: {genre} <br />
                            </p>
    
                            <Button variant="outline-light" className="mx-auto mt-3 px-5 btn-dark btn-outline-light btn-sm text-monospace" size="sm">
                                Details
                            </Button>
    
    
                        </div>
    
    
                    </div>
    
                </div>
            )
        });
    
    
     */
    // const [keys, value] = selectedGames
    // console.log(value);

    const dispatch = useDispatch();

    const onRemove = (gameItem, e) => {
        dispatch(removeFromPlaylist(gameItem))

        // e.preventdefault();
    }


    return (
        <div>
            <Container>
                <h2>My Playlist</h2>
                <Row sx={1} md={3} >
                    {
                        selectedGames.map(value => <Col key={value.id} className='my-5'>
                            <Card className='h-100 bg-dark hover-card card-border' >
                                <Card.Img className='img-fluid' variant="top" src={value.thumbnail} height='300' />
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        <p className='text-muted'>{value.genre}</p>
                                    </Card.Text>

                                    <Button onClick={() => onRemove(value)} type="button" className="p-3 w-100 btn-dark text-white btn-outline-secondary btn-sm">Remove From The Playlist</Button>
                                </Card.Body>
                            </Card>

                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyPlaylist;