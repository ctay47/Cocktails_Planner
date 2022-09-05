import React from 'react'
import { Link } from 'react-router-dom';
import video from '../assets/video.mp4';


const Home = () => {
  return (
    <section className="Home">
      <video controls autoPlay muted loop class="video-container">
        <source src={video} type="video/mp4" />
        Sorry, your browser does not support embedded videos
      </video>
      <div class="video-banner">
        <div class="section-title">
          <h1>Coktail Menu Planner</h1>
          <div class="underline"></div>
        </div>
        <p class="video-text">
          Create A Cocktail Menu! <span></span>
        </p>
        <Link to="/search">
          <button className="btn btn-primary">Search</button>
        </Link>
      </div>
    </section>
  );
}

export default Home