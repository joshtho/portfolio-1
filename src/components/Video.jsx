import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Project from './Project'

function Video({project}) {
  return (
    <Accordion defaultActiveKey="0" bg='dark' >
      <Accordion.Item eventKey="1">
        <Accordion.Header>Video</Accordion.Header>
        <Accordion.Body>
        <iframe width="100%" height="460" src={`https://www.youtube.com/embed/${project.videoId}`} title={project.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Video