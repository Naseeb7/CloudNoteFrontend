import React,{useContext} from 'react'
import "./Noteitem.css"
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
    const context=useContext(noteContext);
    const { deleteNote } = context;
    const { note,updateNote } = props;
    return (
        <>
            <div className="cardContainer">
                <div className="cardtop">
                    <i className="fa-solid fa-trash" onClick={async ()=>{await deleteNote(note._id);  props.showAlert("Successful","Note deleted!","greenAlert")}}></i>
                    <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
                </div>
                <div className="cardbottom">
                    <span className='titletext cardTitle'><b>{props.Capitalize(note.title)}</b></span>
                    <p className='paratext'>{note.description}</p>
                    <span className="tag tagtext">{note.tag}</span>
                </div>
            </div>
        </>
    )
}

export default Noteitem
