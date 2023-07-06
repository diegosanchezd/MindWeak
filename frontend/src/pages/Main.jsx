import React, { useEffect, useState } from "react";
import { getData } from "../services/userService";
import { Route, Link } from "react-router-dom"
import "../stylesheets/main.css"


export default function Main(){
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setData(response);
      } catch (error) {
        console.error(error);
        // Manejo del error si ocurre
      }
    };
  
    fetchData();
  }, []);


  return(
    <div className="main_container">
      <h1>Bienvenidos a Mindweak</h1>
      <div className="main_section">
      <h2>Nuestros Usuarios: </h2>
        <div className="clients_section">
          {data && data.map((e, index) => (
            <h6 key={index}>{e.userName}</h6>
           ))}
        </div>
      </div>
      <div className="link_container">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/main">Main</Link>
        </div>
    </div>
  )
}