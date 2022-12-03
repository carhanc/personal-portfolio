import React from 'react'
import './about.css'
import ME from '../../arhan-pics/arhan-hawaii.jpg'
import {FaLaptopCode} from 'react-icons/fa'
import {SiDribbble} from 'react-icons/si'
import {MdOutlineAnalytics} from 'react-icons/md'

const About = () => {
  return (
    <div id = 'about' className='about-mt'>
    <section>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <MdOutlineAnalytics className='about__icon'/>
              <h5>Problem Solving</h5>
              <small>I Have An Analytical Mind</small>
            </article>
            
            <article className='about__card'>
              <FaLaptopCode className='about__icon'/>
              <h5>Coding</h5>
              <small>I Love Web Designing</small>
            </article>

            <article className='about__card'>
              <SiDribbble className='about__icon'/>
              <h5>Basketball</h5>
              <small>I Love Playing Basketball</small>
            </article>

          </div>

          <p className='pp'>
          I'm a Front End Developer from California, USA and I love web designing. I am able to think and problem solve to create beautiful websites using programming languages such as HTML, CSS, Javascript, Tailwind, and Bootstrap. 
          </p>

          <p>
          Other than web designing, I love solving complex problems related to math and science as well as playing basketball with my older brother. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      
    </section>
    </div>
  )
}

export default About