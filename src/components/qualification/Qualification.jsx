import React, {useState} from 'react'
import './qualification.css'

const Qualification = () => {

    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">

                <div className={toggleState === 1 ? "qualification__content" : "qualification__content qualification__content-active"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Growth Hacker</h3>
                            <span className="qualification__subtitle">Brazil - NFE.io</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">CEO</h3>
                            <span className="qualification__subtitle">Brazil - Webeats</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Front-End Engineer</h3>
                            <span className="qualification__subtitle">Brazil - Ci&T</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2010 - 2013
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Front-End Developer</h3>
                            <span className="qualification__subtitle">Brazil - Kenlo</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2009 - 2010
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Front-End Developer</h3>
                            <span className="qualification__subtitle">Brazil - Starcorp</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2008 - 2009
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content" : "qualification__content qualification__content-active"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">System Analysis</h3>
                            <span className="qualification__subtitle">Brazil - Veris</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2009 - 2011
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Leader Training</h3>
                            <span className="qualification__subtitle">Brazil - Nova Conexão</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2010
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qualification__subtitle">Brazil - People Computação</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2007 - 2008
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification