import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import UserState from './context/notes/UserState';
import Userprofile from './components/Userprofile';

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(title,message,classes)=>{
    setAlert({
      title:title,
      message:message,
      classes:classes
    })
    // document.getElementById("alertdiv").style.animation="fadeIn 1s 1s alternate-reverse"
    setTimeout(() => {
      setAlert(null);
    }, 2800);
  }
  const Capitalize = (str) => {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
  }
  return (
    <>
    <NoteState>
    <Router>
      <UserState showAlert={showAlert}>
    <Navbar/>
    <Alert alert={alert}/>
      <div className="Container">
    <Routes>
      <Route exact path='/' element={<Home showAlert={showAlert} Capitalize={Capitalize}/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
      <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}/>
      <Route exact path='/userprofile' element={<Userprofile showAlert={showAlert} Capitalize={Capitalize}/>}/>
    </Routes>
      </div>
    </UserState>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
