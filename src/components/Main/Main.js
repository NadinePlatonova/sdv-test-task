import React from 'react';
import './Main.css';
import mainPic from '../../images/main_pic.png';

function Main(props) {
    return (
      <main className="main">
        <img className="main__picture" src={mainPic} alt="People and heart in the center"/>
        <section className="main__section">
            <h1 className="main__title">How to Participate</h1>
            <ul className="main__list">
                <li className="main__list-item">
                    <p className="main__list-item-number">1.</p>
                    <p className="main__list-item-text">Subscribe to our News</p>
                </li>
                <li className="main__list-item">
                    <p className="main__list-item-number">2.</p>
                    <button className="main__button" onClick={props.onSignInPopupOpen}>Sign Up</button>
                </li>
                <li className="main__list-item">
                    <p className="main__list-item-number">3.</p>
                    <p className="main__list-item-text">Check your email inbox</p>
                </li>
                <li className="main__list-item">
                    <p className="main__list-item-number">4.</p>
                    <p className="main__list-item-text">Wait till September 22</p>
                </li>
            </ul>

        </section>
      </main>
    );
  }
  
  export default Main;