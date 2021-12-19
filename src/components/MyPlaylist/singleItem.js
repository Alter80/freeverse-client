import React from 'react';
import { Button } from 'react-bootstrap';

const singleItem = (props) => {

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

                    <Button variant="outline-light" className="mx-auto mt-3 px-5 btn-dark btn-outline-light btn-sm text-monospace" onClick={() => setModalShow(true)} size="sm">
                        Details
                    </Button>


                </div>


            </div>

        </div>
    );
};

export default singleItem;