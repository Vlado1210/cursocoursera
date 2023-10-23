import React, { useState } from 'react';
import '../styles/BookingForm.css';
import { Link } from 'react-router-dom';

function BookingForm(props) {
  const [details, setDetails] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  });
  const [detailsValid, setDetailsValid] = useState({
    date: false,
    time: true,
    guests: true,
    occasion: true,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formIncomplete, setFormIncomplete] = useState(false); // Add this state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setDetailsValid((prevValid) => ({
      ...prevValid,
      [name]: !!value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all details are valid before submission
    if (Object.values(detailsValid).every((isValid) => isValid)) {
      // All details are valid, you can proceed with form submission
      console.log('Form submitted:', details);
      setFormSubmitted(true);
      setFormIncomplete(false); // Reset the formIncomplete state
    } else {
      // Some inputs are invalid, show an error message and set formIncomplete to true
      console.log('Form is incomplete. Please fill in all required fields.');
      setFormIncomplete(true);
    }
  };

  return (
    <div className='input-display'>
      {formSubmitted ? (
        <div>
          <p>Thank you for your submission!</p>
          <Link to='/'>Home</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor='res-date'>Choose date</label>
          <input name='date' type='date' id='res-date' onChange={handleInputChange} />

          <label htmlFor='res-time'>Choose time</label>
          <select name='time' id='res-time' onChange={handleInputChange}>
            <option value='17:00'>17:00</option>
            <option value='18:00'>18:00</option>
            <option value='19:00'>19:00</option>
            <option value='20:00'>20:00</option>
            <option value='21:00'>21:00</option>
            <option value='22:00'>22:00</option>
          </select>

          <label htmlFor='guests'>Number of guests</label>
          <input name='guests' type='number' placeholder={1} min={1} max={10} id='guests' onChange={handleInputChange} />

          <label htmlFor='occasion'>Occasion</label>
          <select name='occasion' id='occasion' onChange={handleInputChange}>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
          </select>

          {formIncomplete && (
            <div className="error-message">
              Please fill in all the required fields.
            </div>
          )}

          <button type='submit'>Submit</button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
