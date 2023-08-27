import React from 'react'

function Info() {
    const url = {
        blog: "https://medium.com/@joshua.thompson0010",
        
    }
    function handleClick() {
        window.open(url.blog)
    }
  return (
    <div className='title' >
        Links: 
        <br/>
        <button onClick={handleClick}>blog</button>
        
    </div>
  )
}

export default Info