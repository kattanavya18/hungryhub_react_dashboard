import React from 'react'

const NavBar = ({showLoginHandler, showRegisterHandler, showLogOut, logOutHandler, showWelcomeHandler }) => {
  
  const firmName = localStorage.getItem('firmName')

  return (
    <div className="navSection">
      
        <div className="company" onClick={showWelcomeHandler} style={{ cursor: 'pointer' }}>
            Vendor Dashboard
        </div>
        {firmName && (
        <div className="firmName">
          <h4>Firm Name: {firmName}</h4>
        </div>
      )}
        <div className="userAuth">
          {!showLogOut ?  <>
           <span onClick={showLoginHandler} style={{ cursor: 'pointer' }}>Login / </span>
          <span onClick={showRegisterHandler} style={{ cursor: 'pointer' }}>Register</span>
          </> : <span onClick={logOutHandler} className='logout' style={{ cursor: 'pointer' }}>Logout</span>  }
          
        </div>
    </div>
  )
}

export default NavBar