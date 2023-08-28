import React from 'react'
import { useNavigate } from 'react-router-dom';


function MainPage() {
  const navigate = useNavigate()

  // function handleClick() {
  //   navigate("/links")
  // }
  return (
    <div >
      <div className='title' >
        
        <span >JOSHUA</span>
        <br/>
        <span >KEANE</span>
        <br/>
        <span>THOMPSON</span>
        <br/>
        <span>FULL STACK WEB DEVELOPER</span>
      <br></br>
      <br></br>
      <br></br>
      <img className='logo' src='https://miro.medium.com/v2/resize:fit:640/1*qcZqFSdegzBIkxImgw5EJg.png'/>
      <img className='logo' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_170805.png' />
      <img className='logo2' src='https://cdn.icon-icons.com/icons2/2415/PNG/512/ruby_plain_wordmark_logo_icon_146362.png' />
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/2560px-Ruby_On_Rails_Logo.svg.png' />
      </div>
    </div>
  )
}

export default MainPage;