import React from 'react'
import { useNavigate } from 'react-router-dom';


function MainPage() {
  const navigate = useNavigate()

  function handleClick() {
    navigate("/links")
  }
  return (
    <div className='title' >
      <br></br>
      <span>THIS IS JOSHUA</span>
      <br/>
      <span>KEANE</span>
      <br/>
      <span>THOMPSON</span>
      <p>Problem solver and strong communicator eager to prove my value and talent at a well respected company like yours. Motivated to advance and expand my skill set through targeted mentorship and challenging projects.
      </p>
      <button onClick={handleClick}>Links</button>
    </div>
  )
}

export default MainPage;