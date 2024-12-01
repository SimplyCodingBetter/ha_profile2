import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">

       <div className="about__box">
        <i className="about icon icon-fire"></i>

        <div>
            <h3 className="about__title">89</h3>
            <span className="about__subtitle">Projects Completed</span>
        </div>
       </div>

       <div className="about__box">
        <i className="about icon icon-cup"></i>

        <div>
            <h3 className="about__title">456</h3>
            <span className="about__subtitle">Cup of Coffee</span>
        </div>
       </div>

       
       <div className="about__box">
        <i className="about icon icon-people"></i>

        <div>
            <h3 className="about__title">102</h3>
            <span className="about__subtitle">Happy Team Members</span>
        </div>
       </div>


    </div>
  )
}

export default AboutBox
