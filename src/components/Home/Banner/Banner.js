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
                <h1 className='text1'>
                    FreeVERSE <br />
                    <span id='span1'>Free To Play Games</span>
                    <Link to='/allgames'> <Button className='main-btn mt-3' variant="outline-light">Explore</Button></Link>
                </h1>
            </header>
        </div>
    );
};

export default Banner;