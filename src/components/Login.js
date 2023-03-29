import React, { useContext, useState } from 'react'
import userContext from '../context/notes/userContext';
import "./Login.css"

const Login = (props) => {
    const usercontext=useContext(userContext);
    const {Login}=usercontext
    // const {showAlert}=props
    const [credentials,setCredentials]=useState({email:"",password:""})
    const handleLogin = async (e) => {
        e.preventDefault();
       Login(credentials.email,credentials.password);
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }
    return (
        <div className="loginform">
            <form onSubmit={handleLogin}>
                <label htmlFor="email" className="titletext">Email</label>
                <input type="text" name='email' value={credentials.email} onChange={onChange} className="inputtext" /><br />
                <label htmlFor="password" className="titletext">Password</label>
                <input type="password" name='password' value={credentials.password} onChange={onChange} className="inputtext" /><br />
                <button type='submit' className="btn" >Login</button>
            </form>
        </div>
    )
}

export default Login
