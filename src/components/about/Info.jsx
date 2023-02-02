import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i className='bx bx-award about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">15+ Years Working</span>
        </div>

        <div className="about__box">
            <i className='bx bx-briefcase about__icon'></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">160 + Projects</span>
        </div>

        <div className="about__box">
            <i className='bx bx-bookmarks about__icon' ></i>

            <h3 className="about__title">Level</h3>
            <span className="about__subtitle">Senior</span>
        </div>
        
    </div>
  )
}

export default Info