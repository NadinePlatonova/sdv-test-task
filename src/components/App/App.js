import React from 'react'
import './App.css'
import Main from '../Main/Main'
import Popup from '../Popup/Popup'
import TooltipPopup from '../TooltipPopup/TooltipPopup'
import * as api from '../../api/api'

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false)
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false)

  const handleSignInClick = () => {
    setIsPopupOpen(true)
  }

  const closeAllPopups = React.useCallback(() => {
    setIsPopupOpen(false)
    setIsTooltipOpen(false)

  }, [])

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups()
      }
    }

    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape)
  }, [closeAllPopups])

  const onRegister = (email, password) => {
    api
      .register(email, password)
      .then(() => {
        console.log(email)
        setIsTooltipOpen(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <Main onSignInPopupOpen={handleSignInClick} />
      <Popup isOpen={isPopupOpen} onClose={closeAllPopups} onRegister={onRegister} />
      <TooltipPopup isOpen={isTooltipOpen} onClose={closeAllPopups} />
    </div>
  )
}

export default App
