import React from 'react'
import './header.css'
import ME from '../../arhan-pics/arhan.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Arhan Vakil</h2>
        <h5 className="text-light">Front End Developer</h5>
        <HeaderSocials />  

        <div className="me">
          <img className='headerImg' src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header