import React from 'react';

function Modal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Thank you for your submission!</h2>
        <p>Your form has been successfully submitted.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
