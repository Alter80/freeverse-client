import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import { BiTime } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer w-100 py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <h5 className="h1 text-white">FREEVERSE</h5>
                        <p className="small text-muted">Find the latest free to play games <br /> from our dedicated library and API.</p>
                        <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">freeverse.com</a></p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><a href="#">Forum</a></li>
                            <li><a href="#">All Games</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-3">Newsletter</h5>
                        <p className="small text-muted">For push notifications via email <br /> please submit your email down below.</p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />

                                <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane" ></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;