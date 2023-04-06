import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../context/notes/userContext';
import "./Userprofile.css"
import Spinner from './Spinner';

const Userprofile = (props) => {
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [oldpassword, setOldpassword] = useState("")
  const usercontext = useContext(userContext);
  const navigator = useNavigate()
  const { Changepwd, Getuser, details,loading2 } = usercontext
  const changepwdform=document.getElementById("changepwdForm")
  useEffect(() => {
    Getuser();
    // eslint-disable-next-line
  }, [])
  const showForm = () => {
    changepwdform.classList.toggle("showform")
    changepwdform.style.animation="fadeIn .3s ease-in-out"
  }
  const onChangenew = (e) => {
    setPassword(e.target.value)
  }
  const onChangeconfirm = (e) => {
    setConfirmpassword(e.target.value)
  }
  const onChangeold = (e) => {
    setOldpassword(e.target.value)
  }
  const handleChange = (e) => {
    e.preventDefault()
    if (password === confirmpassword) {
      Changepwd(password, oldpassword)
    }
    else {
      props.showAlert("Typo", "Passwords must be same", "redAlert")
    }
  }
  const handleBack = () => {
    navigator("/")
  }
  const handleDiscard = (e) => {
    e.preventDefault()
    changepwdform.style.animation="fadeOut .3s ease-out"
    setTimeout(() => {
      changepwdform.classList.remove("showform")
      changepwdform.classList.add("hidden")
    }, 250);
  }
  const handleX = () => {
    changepwdform.style.animation="fadeOut .3s ease-out"
    setTimeout(() => {
      
      changepwdform.classList.remove("showform")
      changepwdform.classList.add("hidden")
    }, 250);
  }
  return (
    <div className='profileContainer'>
      {loading2 && <span className="spinner"><Spinner loading={loading2}/></span>}
        <i className="fa-solid fa-arrow-left back" onClick={handleBack}> Back</i>
      <img src="https://i.ibb.co/XZ96p84/avataaars.png" alt="You" onClick={() => { navigator("/") }} />
      <div className="profileDetails">
        <h3 className='titletext'>{props.Capitalize(details.name)}</h3>
        <h4 className='titletext'>Email</h4>
        <span className='paratext'>{details.email}</span>
        <h4 className='titletext'>Date created</h4>
        <span className='paratext'>{details.date.toString()}</span><br />
        <button className="changeformbtn btn" onClick={showForm}>Change Password</button>
      </div>
      <div className="hidden" id='changepwdForm'>
        <i className="fa-solid fa-xmark Xmark" onClick={handleX} />
        <form>
          <label htmlFor="oldpwd" className="oldpwd">Old Password</label>
          <input type="text" className="oldpwd inputtext" id='oldpwd' name='oldpwd' onChange={onChangeold} /><br />
          <label htmlFor="newpwd" className='newpwd'>New Password</label>
          <input type="password" className="newpwd inputtext" id='newpwd' name='newpwd' onChange={onChangenew} /><br />
          <label htmlFor="confirmpwd" className='confirmpwd'>Confirm Password</label>
          <input type="text" className="confirmpwd inputtext" id='confirmpwd' name='confirmpwd' onChange={onChangeconfirm} /><br />
          <div className="formbtn">
            <button className="btn" id="discardbtn" onClick={handleDiscard}>Discard</button>
            <button className="btn" id='changepwdbtn' onClick={handleChange}>Change</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Userprofile
