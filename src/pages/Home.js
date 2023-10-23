import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/lemonbackground.png'
import '../styles/Home.css'

function Home() {
  return (
    <section>
      <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>
        <h1>Little <span className='yellowlemon'>Lemon</span> </h1>
        <h2>Amsterdam</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed<br /> do eiusmod tempor incididunt ut labore et
            dolore magna<br /> aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation <br/>
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link to="/reservation">
            <button> Reserve Table </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home