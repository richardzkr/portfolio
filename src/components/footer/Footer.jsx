import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Richard Zumkeller</h1>
        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">Home</a>
          </li>
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">Qualification</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://instagram.com" className="footer__social-link" target="_blank"><i class="uil uil-instagram"></i></a>
          <a href="https://linkedin.com" className="footer__social-link" target="_blank"><i class="uil uil-linkedin"></i></a>
          <a href="https://github.com" className="footer__social-link" target="_blank"><i class="uil uil-github"></i></a>
        </div>

        <span className="footer__copy">
          &copy; Richard Zumkeller - All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer