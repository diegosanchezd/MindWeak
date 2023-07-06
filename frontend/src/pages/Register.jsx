import React , {useState} from "react";
import "../stylesheets/register.css"
import { register } from "../services/userService";
import { Route, Link } from "react-router-dom"
import "../stylesheets/main.css"



const initalForm = {
  userName: "",
  password: "",
  isProfesor: false,
  isStudent: false,
  isResponsible: false
}

export default function Register(){

  const [form, setForm] = useState(initalForm);

  const handleChange= (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

    if(e.target.name == "select" ){
      if(e.target.value == "isProfesor"){
        setForm({
          ...form,
          isProfesor: true,
          isStudent: false,
          isResponsible: false
        })
      }if(e.target.value == "isStudent"){
        setForm({
          ...form,
          isProfesor: false,
          isStudent: true,
          isResponsible: false
        })
      }if(e.target.value == "isResponsible"){
        setForm({
          ...form,
          isProfesor: false,
          isStudent: false,
          isResponsible: true
        })
      }
    }

    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    register(form)
  }

  return(
    <>
      <div className="register_component">
        <h2 className="register_tittle">Register</h2>
        <form className="form_register" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" name="userName" value={form.userName} onChange={handleChange}/>
          <input type="text" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
          <select name="select" id="" onChange={handleChange}>
            <option value="">Seleccione su Papel</option>
            <option value="isProfesor">Profesor</option>
            <option value="isStudent">Estudiante</option>
            <option value="isResponsible">Padre/Madre</option>
          </select>
          <input type="submit" value="Register" />
        </form>
        <div className="link_container">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/main">Main</Link>
        </div>
     
      </div>
    </>
  )
}