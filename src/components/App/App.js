import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';

function App() {
const [isPopupOpen, setIsPopupOpen] = React.useState(false);

function handleSignInClick() {
  setIsPopupOpen(true);
}

function closeAllPopups() {
  setIsPopupOpen(false);
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
      <Popup isOpen={isPopupOpen} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
