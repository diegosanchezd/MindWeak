import React from "react";
import "../stylesheets/register.css"

export default function Register(){
  return(
    <>
      <div className="register_component">
        <h2>Register</h2>
        <form className="form_register">
          <input type="text" placeholder="Usernam"/>
          <input type="text" placeholder="Password"/>
          <select name="" id="">
            <option value="">Seleccione su Papel</option>
            <option value="">Profesor</option>
            <option value="">Estudiante</option>
            <option value="">Padre/Madre</option>
          </select>
          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  )
}