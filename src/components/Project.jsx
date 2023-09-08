import React from 'react'

function Project({project}) {
  return (
    <div className='project-tile'  >
      <h2>{project.name}</h2>
      <div className="img-container">
        <img src={project.img.static} alt={project.name} className="project-img" />
      </div>
      <p>{project.desc}</p>
      {/* <ul className="highlights">
        {displayHighlights}
      </ul> */}
      {/* <button className='youtube' onClick={handleVideoClick}><i className="fa-brands fa-youtube"></i> Video</button> */}
      <span className="tech">{project.stack}</span>
      <a className="github" href={project.repo} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> Repo</a>
    </div>
  )
}

export default Project;