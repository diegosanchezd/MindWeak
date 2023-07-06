import React from "react";
import "../stylesheets/Login.css"

export default function Login(){
  return(
    <div className="login_component">
      <h2 className="login_tittle">Welcome to MindWeak</h2>
      <form className="form_login">
        <input type="text" placeholder="Username" className="input_form" />
        <input type="text" placeholder="Password" className="input_form" />
        <input type="submit" value="Log In" className="input_form input_submit"/>
      </form>
    </div>
  )
}