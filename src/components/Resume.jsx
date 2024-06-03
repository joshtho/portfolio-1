import React from 'react'
import resume from '../data/assets/resume-main-1.pdf'

function Resume() {

  return (
    <div >
        <object 
        data={resume} 
        type="application/pdf" 
        width="100%" 
        height='800px' />
    </div>
  )
}

export default Resume