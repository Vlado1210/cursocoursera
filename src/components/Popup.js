import React from 'react';
import '../styles/Popup.css'
import BookingForm from './BookingForm';


function Popup(props) {

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner" id='pops'>
      <h3 className='centered-h3'>Reserve A <span className='yellowtable'>Table</span> </h3>
      <BookingForm/>
      <br/>
      </div>
    </div>
  ) : "";
}

export default Popup;