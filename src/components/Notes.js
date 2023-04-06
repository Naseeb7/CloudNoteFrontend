import React, { useContext, useEffect,useState } from 'react'
import noteContext from '../context/notes/noteContext';
import { useNavigate } from 'react-router-dom';
import Addnote from './Addnote';
import Noteitem from './Noteitem';
import "./Notes.css"
import userContext from '../context/notes/userContext';
import Spinner from "./Spinner"

const Notes = (props) => {
  const notecontext = useContext(noteContext);
  const { notes, getNotes,editNote,loading } = notecontext;
  const usercontext=useContext(userContext);
  const {Getuser,details,Capitalize}=usercontext
  let navigator=useNavigate()
  useEffect(() => {
    if(localStorage.getItem("token")){
      Getuser()
      getNotes()
    }
    else{
      navigator("/login")
      props.showAlert("Denied","Please Login first!","redAlert")
    }
    // eslint-disable-next-line
  }, [])
  // console.log(details)
  const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:"default"})
  let ele = document.getElementById("modal");
  const handleYes= async(e)=>{
    e.preventDefault()
    ele.classList.toggle("mymodal")
    await editNote(note.id,note.etitle,note.edescription,note.etag)
    props.showAlert("Successful","Updated successfully","greenAlert")
  }
  const handleNo=(e)=>{
    e.preventDefault()
    document.getElementById("confirmation").style.animation="scalingOut .5s ease-in-out"
    setTimeout(() => {
      ele.classList.toggle("mymodal")
    }, 450);
  }
  const handleX=(e)=>{
    document.getElementById("confirmation").style.animation="scalingOut .5s ease-in-out"
    setTimeout(() => {
      ele.classList.toggle("mymodal")
    }, 500);
  }
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  const updateNote = (currentNote) => {
    let ele = document.getElementById("modal");
    ele.classList.toggle("mymodal")
    document.getElementById("confirmation").style.animation="scaling 0.5s ease-in-out"
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  }

  
  return (
    <div className='noteContainer'>
      {loading && <span className="spinner"><Spinner loading={loading}/></span>}
      <div className="modal" id='modal'>
      <div className='myconfirmation' id="confirmation">
          <h2 className='headertext'>Update note</h2><i className="fa-solid fa-xmark Xmark" onClick={handleX}/>
          <form>
            <label htmlFor="etitle" className='titletext'>Title</label>
            <input type="text" id="etitle" name="etitle" className='inputtext' placeholder="Title" value={note.etitle} onChange={onChange} minLength={5} required/><br />
            <label htmlFor="edescription" className='titletext'>Description</label>
            <textarea type="text" id="edescription" name="edescription" className='inputtext' placeholder="Description" value={note.edescription} rows="6" onChange={onChange} minLength={5} required /><br />
            <label htmlFor="etag" className='titletext'>Tag</label>
            <input type="text" id="etag" name="etag" className='inputtext' placeholder="Tag" value={note.etag} onChange={onChange} /><br />
          </form>
        <div id="yesnobtn">
          <button className="btn" id="nobtn" onClick={handleNo}>Discard</button>
          <button className="btn" id="yesbtn" onClick={handleYes} disabled={note.etitle.length<5 || note.edescription.length<5}>Update</button>
        </div>
      </div>
      </div>
      <div className="notesArea">
        <div style={{display:"flex"}}>
        <h2 className='titletext' style={{animation:"growOut .5s"}}>{Capitalize(details.name)}'s notes</h2>
        </div>
        <div className="noteitemslist">
        {notes.length===0 && "No notes to display"}
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} updateNote={updateNote} Capitalize={Capitalize} showAlert={props.showAlert}/>
        })}
        </div>
      </div>
      <Addnote showAlert={props.showAlert}/>
    </div>
  )
}

export default Notes
