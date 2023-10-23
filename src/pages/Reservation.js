import React, { useState } from 'react';
import BackImage from '../assets/Reservationbackground.jpg';
import '../styles/Reservation.css';
import Popup from '../components/Popup';



function Reservation() {
  const [buttonsPopup, setButtonsPopup] = useState(false);

  return (
    <div className='reservation' style={{ backgroundImage: `url(${BackImage})` }}>
      <div className='headers-Container'>
        <h1>Little <span className='yellow-lemon'>Lemon</span> </h1>
        <h2>Fresh Italian Meals</h2>
        <button onClick={() => setButtonsPopup(true)}> Reserve Table </button>
      </div>
      <Popup trigger={buttonsPopup} setTrigger={setButtonsPopup}>
      </Popup>
    </div>

  )
}

export default Reservation