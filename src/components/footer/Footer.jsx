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
          <a href="https://linkedin.com/in/richardzkr" className="footer__social-link" target="_blank"><i className="uil uil-linkedin"></i></a>
          <a href="https://github.com/richardzkr" className="footer__social-link" target="_blank"><i className="uil uil-github"></i></a>
          <a href="https://instagram.com/richardzkr" className="footer__social-link" target="_blank"><i className="uil uil-instagram"></i></a>
        </div>

        <span className="footer__copy">
          &copy; Richard Zumkeller - All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer