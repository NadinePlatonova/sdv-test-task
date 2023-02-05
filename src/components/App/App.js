import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import TooltipPopup from '../TooltipPopup/TooltipPopup';

function App() {
const [isPopupOpen, setIsPopupOpen] = React.useState(false);
const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

function handleSignInClick() {
  setIsPopupOpen(true);
}

function closeAllPopups() {
  setIsPopupOpen(false);
  setIsTooltipOpen(false);
}

React.useEffect(() => {
  const closeByEscape = (e) => {
      if (e.key === 'Escape') {
          closeAllPopups();
      }
  }

  document.addEventListener('keydown', closeByEscape)

  return () => document.removeEventListener('keydown', closeByEscape)
}, [])

  return (
    <div className="App">
      <Main onSignInPopupOpen={handleSignInClick} />
      <Popup isOpen={isPopupOpen} onClose={closeAllPopups} />
      <TooltipPopup isOpen={isTooltipOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
