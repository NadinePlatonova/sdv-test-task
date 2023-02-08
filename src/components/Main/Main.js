import React from 'react'
import './Main.css'
import mainPic from '../../images/main_pic.png'

function Main(props) {
  return (
    <main className="main">
      <img className="main__picture" src={mainPic} alt="People and heart in the center" />
      <section className="main__section">
        <h1 className="main__title">How to Participate</h1>
        <ol className="main__list">
          <li className="main__item">Subscribe to our News</li>
          <li className="main__item">
            <button
              className="main__button"
              onClick={props.onSignInPopupOpen}
              aria-label="Open popup to register"
            >
              Sign Up
            </button>
          </li>
          <li className="main__item">Check your email inbox</li>
          <li className="main__item">Wait till September 22</li>
        </ol>
      </section>
    </main>
  )
}

export default Main
