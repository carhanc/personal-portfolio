import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/portfolio1.jpg'
import IMG1 from '../../assets/calcu.png'
// import IMG2 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/weather-app.png'
// import IMG3 from '../../assets/portfolio3.jpg'
import IMG3 from '../../assets/weather-app-forecast.png'
// import IMG4 from '../../assets/portfolio4.jpg'
import IMG4 from '../../assets/tic-tac-toe.png'
// import IMG5 from '../../assets/portfolio5.png'
import IMG5 from '../../assets/lyrics.png'
// import IMG6 from '../../assets/portfolio6.jpg'
import IMG6 from '../../assets/website.png'

const data = [
  {
    id: 1, 
    image: IMG6,
    title: 'Personal Website',
    github:'https://github.com/carhanc' 
  },
  {
    id: 2, 
    image: IMG2,
    title: 'Weather App',
    github:'https://github.com/carhanc' 
  },
  {
    id: 3, 
    image: IMG3,
    title: 'Weather App Forecast',
    github:'https://github.com/carhanc' 
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Tic-Tac-Toe',
    github:'https://github.com/carhanc' 
  },
  {
    id: 5, 
    image: IMG5,
    title: 'Spotify Clone',
    github:'https://github.com/carhanc' 
  },
  {
    id: 6, 
    image: IMG1,
    title: 'Calculator',
    github:'https://github.com/carhanc' 
  }
]

const Portfolio = () => {
  return (

 <div id = 'portfolio' className='portfolio-mt'>

    <section id = 'portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>  
              </article>
            )
          })
        }

      </div>
    </section>

    </div>
  )
}

export default Portfolio