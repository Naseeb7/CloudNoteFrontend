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
            {!localStorage.getItem("token")?<div className="categories">
              <Link to="/about" className="links" style={{color:`${location.pathname==="/about"?"black":""}`}} id="about">About</Link>
            </div>
            :
            <div className="categories">
            <label className='title header'>CloudNote</label>
              <Link to="/" className="links" style={{color:`${location.pathname==="/"?"black":""}`}} id="homelink">Home</Link>
              <Link to="/about" className="links" style={{color:`${location.pathname==="/about"?"black":""}`}} id="about">About</Link>
            </div>}
            <div className="btnContainer" id='btnContainer'>
            {!localStorage.getItem("token")? <div className='login'><Link to='/login' className="links" style={{color:`${location.pathname==="/login"?"black":""}`}}>Login</Link>
            <Link to='/signup' className="links" style={{color:`${location.pathname==="/signup"?"black":""}`}}>Signup</Link></div>:<div className='logout'>
            <i className="fa-regular fa-id-badge" onClick={handleProfile} style={{color:`${location.pathname==="/userprofile"?"black":""}`}}></i>
            <button className='btn' onClick={handleLogout}>Logout</button></div>}
            
      </div>
            </div>
    )
}
export default Navbar