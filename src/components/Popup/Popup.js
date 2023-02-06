import React from 'react';
import './Popup.css';

function Popup(props) {
    return (
      <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" aria-label="Close popup" onClick={props.onClose}></button>
                <h2 className="popup__title">To&nbsp;register, enter the mail to&nbsp;which our news is&nbsp;sent and&nbsp;set your password</h2>
                <form className="popup__form" action="#" >
                    <input type="email" name="email" id="email" className="popup__text" placeholder="Example@email.com" required />
                    <span className="popup__error" id="email-error"></span>
                    <input id="password" name="password" type="password" className="popup__text" placeholder="Password" required />
                    <span className="popup__error" id="password-error"></span>
                    <button type="submit" className="popup__submit-button" aria-label="To register">submit</button>
                </form>
            </div>
      </section>
    );
  }
  
  export default Popup;