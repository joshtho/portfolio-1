import React from 'react'
import Video from './Video'
import { projects } from '../data/projects'
import Project from './Project'
import Container from 'react-bootstrap/Container'

function Info() {
    // const blogButton = <img alt='' className='btn-logo' src='https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png' />
    // const galaButton = <img alt='' className='btn-logo' src='https://static-00.iconduck.com/assets.00/paint-brush-icon-2048x2048-g0m1nv6v.png' />
    // const weStayButton = <img alt='' className='btn-logo' src='https://static.thenounproject.com/png/18457-200.png' />
    // const mainPageButton = <img alt='' className='btn-logo' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />

    // const url = {
    //     blog: "https://medium.com/@joshua.thompson0010",
    //     gala: "https://github.com/joshtho/Gala",
    //     weStay: "https://github.com/joshtho/WeStay",
    //     mainPage: "https://github.com/joshtho"

    //   }

  
    const showProjects = projects.map(project => (
      <Project key={project.name} project={project} />
    ))

  return (
    <Container >
      <br></br>
      <hr style={{color: 'white'}}></hr>
      <h1 className='header'>Technical Projects</h1>
      <hr style={{color: 'white'}}></hr>
      {showProjects}
    </Container>
  )
}

export default Info