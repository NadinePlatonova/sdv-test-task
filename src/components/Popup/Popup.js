import React from 'react'
import './Popup.css'

function Popup(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onRegister(email, password)
  }

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="To close popup"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">
          To&nbsp;register, enter the mail to&nbsp;which our news is&nbsp;sent and&nbsp;set your
          password
        </h2>
        <form className="popup__form" action="#" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            className="popup__text"
            placeholder="Example@email.com"
            required
            pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
          />
          <span className="popup__error" id="email-error"></span>
          <input
            value={password}
            onChange={handlePasswordChange}
            id="password"
            name="password"
            type="password"
            className="popup__text"
            placeholder="Password"
            required
            minLength="8"
          />
          <span className="popup__error" id="password-error"></span>
          <button type="submit" className="popup__submit-button" aria-label="To submit">
            submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Popup
