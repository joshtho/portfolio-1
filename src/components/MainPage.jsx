import React from 'react'
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


function MainPage() {

  return (
    <Container className='title' >
      <br></br>
      <br></br>
        <span >JOSHUA KEANE</span>
        <br/>
        <span>THOMPSON</span>
        <br/>
        <span>FULL STACK WEB DEVELOPER</span>
        <br></br>
        <br></br>
        <Container>
        <img alt=''  src='https://avatars.githubusercontent.com/u/98556712?s=400&u=70440eceb41ed018cce872033433fe6eeae38239&v=4' />
        </Container>
        <br></br>
        
        <p className='text'>Problem solver and strong communicator eager to prove my value and talent at a well respected company like yours. Motivated to advance and expand my skill set through targeted mentorship and challenging projects.
        </p>
        
          <img alt='' className='logo' src='https://miro.medium.com/v2/resize:fit:640/1*qcZqFSdegzBIkxImgw5EJg.png'/>
          <img alt='' className='logo' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_170805.png' />
          <img alt='' className='logo2' src='https://cdn.icon-icons.com/icons2/2415/PNG/512/ruby_plain_wordmark_logo_icon_146362.png' />
          <img alt='' className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/2560px-Ruby_On_Rails_Logo.svg.png' />
          <img alt='' className='logo2' src='https://redux.js.org/img/redux-logo-landscape.png' />
      <br></br>
      <br></br>
    </Container>

       

      
  )
}

export default MainPage;