import React from 'react';
import './popupmodal.css'

const PopupModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Mesaj trimis!</h2>
        <p>Mesajul dumneavoastra a fost trimis cu succes!.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default PopupModal;
