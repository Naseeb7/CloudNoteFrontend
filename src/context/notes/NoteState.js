
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host=process.env.REACT_APP_BASEURL
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  //Get allnote
  const getNotes =async () => {
    //API call
    let url=`${host}/api/notes/fetchallnotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
            },
    });
    const json=await response.json();
    setNotes(json)
  }


  //Add a note
  const addNote =async (title, description, tag) => {
    //API call
    let url=`${host}/api/notes/addnote`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
            },
      body: JSON.stringify({title,description,tag}),
    });
    let note=await response.json()
    setNotes(notes.concat(note))
  }
  //Delete a note
  const deleteNote =async (id) => {
    //API call
    let url=`${host}/api/notes/deletenote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
            }
    });
    // const json= await response.json();

    //Logic to delete note on client-side
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    let url=`${host}/api/notes/updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
            },
      body: JSON.stringify({title,description,tag}),
    });
    // const json=response.json();

    let newNotes=JSON.parse(JSON.stringify(notes))
    //Logic to edit in client-side
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i]
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;