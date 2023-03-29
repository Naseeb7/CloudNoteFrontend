import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import userContext from '../context/notes/userContext';
import "./Signup.css"
const Signup = (props) => {
    const usercontext=useContext(userContext);
    const {Signup}=usercontext
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",confirmpassword:""})
    let navigate=useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault();
       Signup(credentials.name,credentials.email,credentials.password)
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleHere=()=>{
      navigate("/login")
    }
  return (
    <div className="signupform">
      <form onSubmit={handleSignup}>
                <label htmlFor="name" className="titletext">Name</label>
                <input type="text" name='name'  onChange={onChange} className="inputtext" />
                <span className="commenttext">*Name must be at least 5 characters long</span><br />
                <label htmlFor="email" className="titletext">Email</label>
                <input type="text" name='email' onChange={onChange} className="inputtext" /><br />
                <label htmlFor="password" className="titletext">Password</label>
                <input type="password" name='password'  onChange={onChange} className="inputtext" />
                <span className="commenttext">*Password must be at least 5 characters long</span><br />
                <label htmlFor="confirmpassword" className="titletext">Confirm Password</label>
                <input type="password" name='confirmpassword'  onChange={onChange} className="inputtext" /><br />
                <button type='submit' className="btn" >Signup</button><br />
                <span className='paratext gototext'>Already have an account <span onClick={handleHere} className="clickhere">Click here!</span></span>
            </form>
    </div>
  )
}

export default Signup
