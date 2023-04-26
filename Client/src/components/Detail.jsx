import React from "react";
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Estilos from './Detail.module.css'
import { Link } from "react-router-dom";

export default function Detail() {
    const {detailId} = useParams();
    // const navigate = useNavigate()
    const [character, setCharacter] = useState({});

    // function navegar (){
    //     navigate(-1)
    // }

  
    useEffect(() => {
        // fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        
        <div>
            <Link to='/home'> <button className={Estilos.idBotonHome}>Back to home!</button> </Link>
            {/* <button onClick={navegar} className={Estilos.idBotonHome}>"¡HOME!"</button>  */}
            <h1 className={Estilos.h1}>Nombre: {character.name}</h1>
            <img src={character.image} alt="img not found"/>
            <div>
            <h1 className={Estilos.h1}>Estado: {character.status}</h1>
            <h1 className={Estilos.h1}>Especie: {character.species}</h1>
            <h1 className={Estilos.h1}>Genero: {character.gender}</h1>
            <h1 className={Estilos.h1}>Origen: {character.origin?.name}</h1>
            </div>
        </div>
    )
}

