import React from 'react'
import { Link } from 'react-router-dom';
import video from '../assets/video.mp4';

const Home = () => {
  return (
    <section className="Home">
      <video
        controls
        autoplay
        muted
        loop
        class="video-container"
    
      >
        <source src={video} type="video/mp4" />
        Sorry, your browser does not support embedded videos
      </video>
      <div class="video-banner">
        <div class="section-title">
          <h1>Coktail Planner</h1>
          <div class="underline"></div>
        </div>
        <p class="video-text">
          Planning an event or a party. Have a bunch of ingreidents but not sure what cocktail to make. Try the Coktail Planner. Just click on the search to get started.
        </p>
              <Link to='/search'>
                  <button>Search</button>
              </Link>
      </div>
    </section>
  );
}

export default Home