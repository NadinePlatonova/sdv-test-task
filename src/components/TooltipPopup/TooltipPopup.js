import React from 'react'
import './TooltipPopup.css'

function TooltipPopup({ isOpen, onClose }) {
  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_tooltip">
        <button
          type="button"
          className="popup__close"
          aria-label="Close popup"
          onClick={onClose}
        ></button>
        <h2 className="popup__tooltip-title">Thank You</h2>
        <p className="popup__tooltip-text">
          To&nbsp;complete registration, please check your e-mail
        </p>
      </div>
    </section>
  )
}

export default TooltipPopup
