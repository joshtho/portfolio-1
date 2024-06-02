import React from 'react'
import Container from 'react-bootstrap/Container';
import Video from './Video';
import Button from 'react-bootstrap/Button'

function Project({project}) {
  function handleClick(url) {
    window.open(url)
  }
const displayHighlights = project.highlights.map(text => (
  <li>{text}</li>
))
  return (
    <Container className='project-tile'  >
      {project.name === "Medium" ? 
      <>
      <h1 className='header'>Blog</h1> 
      <hr style={{color: "white"}}></hr>
      </>
      : ""}
      <h2>{project.name}</h2>
      <br></br>
      <div className="img-container">
        <img 
        onClick={() => handleClick(project.repo)} 
        title={`Go to ${project.name}`} 
        src={project.img.static} alt={project.name} 
        className="project-img" />
      </div>
      <br></br>
      {/* <Button 
      variant='dark'
      title={`Go to ${project.name}`}
      >Link</Button> */}
      <br></br>
      <br></br>
      {project.name === "Medium" ? "": <Video project={project} />}
      <br></br>
      <p>{project.desc}</p>
      <ul className="highlights">
        {displayHighlights}
      </ul>
      {/* <button className='youtube' onClick={handleVideoClick}><i className="fa-brands fa-youtube"></i> Video</button> */}
      <span className="tech">{project.stack}</span>
      {/* <a className="github" href={project.repo} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> Repo</a> */}
      
      <hr></hr>
    </Container>
  )
}

export default Project;