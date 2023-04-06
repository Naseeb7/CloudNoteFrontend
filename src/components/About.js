import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./About.css"

const About = () => {
  const navigator=useNavigate()
  const handleBack=()=>{
    navigator("/")
  }
  return (
    <div className='aboutContainer'>
      <i className="fa-solid fa-arrow-left back" onClick={handleBack}/>
      <div className="aboutHead">
      <img src="https://i.ibb.co/JsBj26L/oie-rys-Pwf7-BQVWb.jpg" alt="CloudNote" className="image" />
      <h1 className='aboutHeader'>CloudNote-Your notes secured on the cloud</h1>
      </div>
      <div className="aboutText">
      <p>Always got the feeling of forgetting something, or feels like there's work that need to be done but don't remember what is it?</p><br /><span style={{color:"#4f104ac3"}}><b>CloudNote's got your back<i className="fa-regular fa-face-smile-wink"/></b></span><br /><p>Why use something that only restricts your notes to a device, when you can have access to all your notes anytime, anywhere, any device <i>(so long as you remember your password)</i>. Try it and no need to remember anything, just log it in and you can access it anywhere, just remember <b style={{color:"#4f104ac3"}}><i>CloudNote.</i></b></p>
      </div>
    </div>
  )
}

export default About
