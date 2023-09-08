import React from 'react'
import Video from './Video'
import { projects } from '../data/projects'
import Project from './Project'
import Container from 'react-bootstrap/Container'

function Info() {
    const blogButton = <img alt='' className='btn-logo' src='https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png' />
    const galaButton = <img alt='' className='btn-logo' src='https://static-00.iconduck.com/assets.00/paint-brush-icon-2048x2048-g0m1nv6v.png' />
    const weStayButton = <img alt='' className='btn-logo' src='https://static.thenounproject.com/png/18457-200.png' />
    const mainPageButton = <img alt='' className='btn-logo' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />

    const url = {
        blog: "https://medium.com/@joshua.thompson0010",
        gala: "https://github.com/joshtho/Gala",
        weStay: "https://github.com/joshtho/WeStay",
        mainPage: "https://github.com/joshtho"

      }

    function handleClick(info) {
        window.open(info)
    }
  
    const showProjects = projects.map(project => (
      <Project key={project.name} project={project} />
    ))

  return (
    <Container >
      <h1>Technical Projects</h1>
      {showProjects}
        
        {/* <div className="card">
            <div className="card-image">
                <img src={'https://i.imgur.com/ELlrren.png'} alt="cover"/>
            </div>
            <div className='text-container'>
              <div className="card-title">Dentonpalooza</div>
              <div className="card-details">Freelance web development project for the Dentonpalooza festival in Denton, TX.</div>
              <div className="card-details">● Utilized React and CSS to build an engaging, informational website.</div>
              <div className="card-details">● Translated artistic direction into UI/UX, while incorporating sponsor identities.</div>
              <div className="card-details">● Acquired firsthand exposure to professional and non-profit development dynamics.</div>
              <div className="card-details">● Incorporated accessibility design tailored to users with visual impairments.</div>
            </div>
            <Link to={'https://giantcarlos.github.io/dentonpalooza23/'} target="_blank">
              <button className="button">Live Link</button>
            </Link>
            <Link to={'https://github.com/giantcarlos/dentonpalooza23'} target="_blank">
              <button className="button">Github</button>
            </Link>
        </div> */}
    </Container>
  )
}

export default Info