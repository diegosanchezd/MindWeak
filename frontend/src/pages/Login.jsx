import React , {useState} from "react";
import "../stylesheets/Login.css"
import { logUser } from "../services/userService";
import { Route, Link } from "react-router-dom"
import "../stylesheets/main.css"

import { getData } from "../services/userService";

const initalForm= {
  userName: "",
  password: ""
}

export default function Login(){

  const [form, setForm] = useState(initalForm);

  const handleChange =(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    logUser(form)
  }

  return(
    <div className="login_component">
      <h2 className="login_tittle">Welcome to MindWeak</h2>
      <form className="form_login" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="input_form" name="userName" value={form.userName} onChange={handleChange}/>
        <input type="text" placeholder="Password" className="input_form" name="password" value={form.password} onChange={handleChange}/>
        <input type="submit" value="Log In" className="input_form input_submit"/>
      </form>
      <div className="link_container">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/main">Main</Link>
        </div>
    </div>
  )
}