import React from 'react'
import Video from './Video'
import Button from 'react-bootstrap/Button'
import { projects } from '../data/projects'
import Project from './Project'
import Container from 'react-bootstrap/Container'

function Info() {
    // const blogButton = <img alt='' className='btn-logo' src='https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png' />
    // const galaButton = <img alt='' className='btn-logo' src='https://static-00.iconduck.com/assets.00/paint-brush-icon-2048x2048-g0m1nv6v.png' />
    // const weStayButton = <img alt='' className='btn-logo' src='https://static.thenounproject.com/png/18457-200.png' />
    const mainPageButton = <img alt='' className='btn-logo' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
    const emailButton = <img alt='' className='btn-logo' src='https://cdn-icons-png.flaticon.com/512/542/542638.png' />
    const linkedInButton = <img alt='' className='btn-logo' src='https://www.svgrepo.com/show/144030/linkedin-square-logo.svg' />

    const url = {
        github: "https://github.com/joshtho",
        email: "mailto:joshua.thompson0010@gmail.com",
        linkedIn: "https://www.linkedin.com/in/joshua-thompson0010"
      }

    function windowOpen(url) {
      window.open(url)
    }

  
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
      <Container>
        <h1 className='header'>Contact me</h1>
        <hr style={{color: 'white'}}></hr>
        <div className='btn-container' >
        <Button onClick={() => windowOpen(url.github)} className='contact-btn' variant='dark' title='My Github'>{mainPageButton}</Button>
        <Button onClick={() => windowOpen(url.email)} className='contact-btn' variant='dark'title='My Email'>{emailButton}</Button>
        <Button onClick={() => windowOpen(url.linkedIn)} className='contact-btn' variant='dark'title='My LinkedIn'>{linkedInButton}</Button>
        </div>

      </Container>
    </Container>
  )
}

export default Info