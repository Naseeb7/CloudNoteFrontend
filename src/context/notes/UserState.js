import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import userContext from './userContext'

let Base_url=process.env.REACT_APP_BASEURL

const UserState = (props) => {
    const [details, setDetails] = useState({ name: "", email: "", id: "", date: "" })
    let navigate = useNavigate()
    const Getuser = async () => {
        let url = `${Base_url}/api/auth/getuser`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        })
        const json = await response.json();
        // console.log(json)
        setDetails({ name: json.user.name, email: json.user.email, id: json.user._id, date: json.user.date })
    }
    const Login = async (email, password) => {
        let url = `${Base_url}/api/auth/login`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ email, password }),
        });
        const json = await response.json();
        // console.log(json)
        if (json.success) {
            //redirect
            localStorage.setItem("token", json.authtoken);
            navigate("/");
            props.showAlert("Happy Noting","","alert")
        }
        else if(json.success===false && json.error==="Incorrect email"){
            props.showAlert("No account with that email","Please create an account","alert")
        }
        else {
            props.showAlert("Invalid", "Credentials","redAlert")
        }
    }
    const Signup = async (name, email, password) => {
        // const {name,email,password,confirmpassword}=credentials;
        let url = `${Base_url}/api/auth/createuser`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json();
        // console.log(json)
        if (json.success) {
            //redirect
            localStorage.setItem("token", json.authtoken);
            navigate("/");
            props.showAlert("Successful", "Account Created","greenAlert")
        }
        else {
            props.showAlert("Invalid", "Please fillup the form correctly","redAlert")
        }
    }
    const Changepwd = async (password,oldpassword) => {
        let url = `${Base_url}/api/auth/userpwd`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({password,oldpassword})
        })
        const json = await response.json();
        // console.log(json.error)
        if(json.success===false && json.error==="same"){
            props.showAlert("Denied","Password must not be same as old one","redAlert");
        }
        else if(json.success===false && json.error==="invalid"){
            props.showAlert("Denied","Invalid credentials!","redAlert")
        }
        else{
            props.showAlert("Success","Password changed successfully","greenAlert")
            document.getElementById("changepwdForm").classList.toggle("hidden");
            document.getElementById("newpwd").value=""
            document.getElementById("confirmpwd").value=""
            document.getElementById("oldpwd").value=""
        }
    }
    return (
        <div>
            <userContext.Provider value={{ Login, Signup, Getuser, Changepwd, details }}>
                {props.children}
            </userContext.Provider>
        </div>
    )
}

export default UserState
