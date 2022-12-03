import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsDiscord} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#about" className='footer__logo'>Arhan Vakil</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://discord.com" target='_blank'><BsDiscord /></a>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://twitter"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small></small>
      </div>
    </footer>
  )
}

export default Footer