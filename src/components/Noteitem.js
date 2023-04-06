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
                    <span className="tag tagtext">{note.tag}</span>
                    <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
                </div>
                <div className="cardbottom">
                    <h4 className='titletext'><b>{props.Capitalize(note.title)}</b></h4>
                    <p className='paratext'>{note.description}</p>
                </div>
            </div>
        </>
    )
}

export default Noteitem
