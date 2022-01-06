import React from 'react';
import './Banner.css'
import VideoPlayer from 'react-background-video-player';
import bannerVideo from './bannervideo.mp4'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner'>
            <VideoPlayer className="video"
                src={
                    bannerVideo
                }
                loop={true}
                autoPlay={true}
                muted={true}
            />

            <header class="viewport-header">
                <h1 data-aos="zoom-out-up" className='text1'>
                    FreeVERSE <br />
                    <span id='span1'>Free To Play Games</span>
                    <Link to='/allgames'> <Button data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="1000"
                        data-aos-offset="0"
                        className='main-btn mt-3' variant="outline-light">Explore</Button></Link>
                </h1>
            </header>
        </div>
    );
};

export default Banner;