import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import userContext from '../context/notes/userContext';
import "./Signup.css"
import Spinner from './Spinner';
const Signup = (props) => {
    const usercontext=useContext(userContext);
    const {Signup,loading2}=usercontext
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",confirmpassword:""})
    let navigate=useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault()
        let password=document.getElementById("password").value
        let confirmPassword=document.getElementById("confirmPassword").value
       if(password===confirmPassword){
        Signup(credentials.name,credentials.email,credentials.password)
       }
       else{
        props.showAlert("Mismatch","Passwords doesn't match","redAlert")
       }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleHere=()=>{
      navigate("/login")
    }
  return (
    <div className="signupContainer">
      <span className="headertext loginHeader">CloudNote</span>
    <div className="signupform">
      <form onSubmit={handleSignup}>
                <label htmlFor="name" className="titletext">Name</label>
                <input type="text" name='name'  onChange={onChange} className="inputtext" />
                <span className="commenttext">*Name must be at least 5 characters long</span><br />
                <label htmlFor="email" className="titletext">Email</label>
                <input type="text" name='email' onChange={onChange} className="inputtext" /><br />
                <label htmlFor="password" className="titletext">Password</label>
                <input type="password" name='password' id='password'  onChange={onChange} className="inputtext" />
                <span className="commenttext">*Password must be at least 5 characters long</span><br />
                <label htmlFor="confirmpassword" className="titletext">Confirm Password</label>
                <input type="password" name='confirmpassword' id='confirmPassword'  onChange={onChange} className="inputtext" /><br />
                <button type='submit' className="btn" >Signup</button><br />
                <span className='paratext gototext'>Already have an account <span onClick={handleHere} className="clickhere">Click here!</span></span>
            </form>
    </div>
    {loading2 && <Spinner loading={loading2}/>}
    </div>
  )
}

export default Signup
