import React from 'react'
import Backend from './Backend'
import Design from './Design'
import Frontend from './Frontend'
import Marketing from './Marketing'
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Design />
            <Marketing />
        </div>
    </section>
  )
}

export default Skills