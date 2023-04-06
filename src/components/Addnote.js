import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';
import "./Addnote.css"

const Addnote = (props) => {
    const context=useContext(noteContext);
  const {addNote}=context
  const [note,setNote]=useState({title:"",description:"",tag:"Personal"})

  const handleClick=async (e)=>{
    e.preventDefault()
    await addNote(note.title,note.description,note.tag);
    setNote({title:"",description:"",tag:"Personal"})
    props.showAlert("Successful","Note created","greenAlert")
  }
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
    return (
        <div className="addnoteContainer">
            <form>
            <h2 className='headertext' style={{display:"flex",justifyContent:"center"}}>Enter note here</h2>
                <label htmlFor="title" className='titletext addnotetitle'><b>Title</b></label>
                <input type="text" id="title" name="title" placeholder="Title" value={note.title} onChange={onChange} minLength={5} required className='inputtext'/><br />
                <label htmlFor="description" className='titletext addnotedesc'><b>Description</b></label>
                <textarea type="text" id="description" name="description" placeholder="Description" value={note.description} rows="6" onChange={onChange} minLength={5} required className='inputtext'/><br />
                <label htmlFor="tag" className='titletext addnotetag'><b>Tag</b></label>
                <input type="text" id="tag" name="tag" placeholder="Tag" value={note.tag} onChange={onChange} className='inputtext'/><br />
                <input type="submit" value="Add note" className='btn addnotebtn' onClick={handleClick} disabled={note.title.length<5 || note.description.length<5} />
                <span className="commenttext">*Title must be at least 3 characters long</span>
                <span className="commenttext">*Description must be at least 5 characters long</span>
            </form>
        </div>
    )
}

export default Addnote
