import React, { useState } from 'react';
import { Alert, Button, Col, Container, Modal, Row, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToPlaylist } from '../../redux/slices/gameSlice';

import { useSpring, animated as a } from "react-spring";

const MyModal = (props) => {
    const { id, developer, game_url, genre, platform, publisher, release_date, short_description, thumbnail, title } = props.data;
    // console.log(props.data)
    const dispatch = useDispatch();

    const [clicked, setClicked] = useState(true);

    // spring animation
    const [greetingStatus, displayGreeting] = React.useState(false);
    const contentProps = useSpring({
        opacity: greetingStatus ? 1 : 0,
        marginTop: greetingStatus ? 0 : 1500
    });


    const onAdd = (gameItem, clicked, e) => {
        dispatch(addToPlaylist(gameItem))

        setClicked(clicked); //setclicked(true) 

        displayGreeting(a => !a)

        e.preventdefault();
    }


    return (
        <Modal
            className='px-1'
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body className='bg-dark text-white p-4'>
                <img className='p-4 mx-md-3 img-fluid ' src={thumbnail} alt="" srcset="" />
                <h4 className='text-center'>{title}</h4>
                <p className='text-small text-center'> <small className=' text-muted'>Developer: </small> {developer}  <br /> </p>
                <p >
                    {short_description}
                </p>

                <div className='d-md-flex text-small justify-content-between'>

                    <p> <small className='text-muted'>Genre:</small> {genre} <br /> </p>

                    <p className='me-3 px-1'> <small className='text-muted'>Platform:</small> {platform} <br /> </p>
                </div>

                <div className='d-md-flex justify-content-between text-small'>
                    <p> <span className='text-muted'>Publisher:</span> {publisher}  <br /> </p>

                    <p> <span className='text-muted'>Release Date:</span> {release_date} <br /> </p>


                </div>


                <Stack gap={2} className="col-md-5 w-100 pt-3 mx-auto">
                    <a className='text-decoration-none' href={game_url} target="_blank" ><Button variant="outline-light w-100">Download Now!</Button></a>

                    {/* condition ? true : false */}
                    {/* <Button onClick={() => onAdd(props.data, false)} type="button" className={clicked ? "p-2 btn-dark btn-outline-light btn-sm" : "disabled p-2 btn-dark btn-outline-light btn-sm"} >Add to Playlist</Button> */}

                    {clicked ? <Button onClick={() => onAdd(props.data, false)} type="button" className="p-2 btn-dark btn-outline-light btn-sm" >Add to Playlist</Button> : <Button type="button" className="p-2 btn-dark btn-outline-light btn-sm" disabled>Add to Playlist</Button>}

                    <Button onClick={props.onHide} type="button" className="p-2 btn-dark text-white btn-outline-secondary btn-sm">Close</Button>
                </Stack>

                {!greetingStatus ? (
                    <div className="text-center mt-1">Click 'Add To Playlist' to your library</div>
                ) : (
                    <a.div className="text-center mt-1" style={contentProps}>
                        <p>Added To playlist. Check 'My Playlist' option</p>
                    </a.div>
                )}

            </Modal.Body>
        </Modal >

    );
};

export default MyModal;