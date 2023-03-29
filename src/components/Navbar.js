import React from 'react'
import "./Navbar.css"
import {
  Link,useLocation,useNavigate
} from "react-router-dom";

const Navbar =()=> {
  let location=useLocation()
  let navigator=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("token")
    navigator("/login")
  }
  const handleProfile=()=>{
    navigator("/userprofile")
  }
    return (
        <div className="navbarContainer">
            <div className="categories">
            <label className='title header' style={{color:"#c294d4"}}>CloudNote</label>
              <Link to="/" className="links" style={{color:`${location.pathname==="/"?"#41e9cd":""}`}} id="homelink">Home</Link>
              <Link to="/about" className="links" style={{color:`${location.pathname==="/about"?"#41e9cd":""}`}} id="about">About</Link>
            </div>
            <div className="btnContainer" id='btnContainer'>
            {!localStorage.getItem("token")? <div className='login'><Link to='/login' className="links">Login</Link>
            <Link to='/signup' className="links">Signup</Link></div>:<div className='logout'>
            <i className="fa-regular fa-id-badge" onClick={handleProfile}></i>
            <button className='btn' onClick={handleLogout}>Logout</button></div>}
            
      </div>
            </div>
    )
}
export default Navbar