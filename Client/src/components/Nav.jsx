import React from "react";
import SearchBar from '../components/SearchBar'
import Estilos from '../components/Nav.module.css'
import { Link, NavLink } from "react-router-dom";

export default function Nav({onSearch, logout}){
    return(
     <div className={Estilos.idContenedor}>

       <SearchBar
       onSearch={(characterID) => onSearch(characterID)}
       />

       <div className={Estilos.idLink} >

      <Link to='/about'><span className={Estilos.idSpanLink}>About</span></Link>
      <br />
      <Link to='/home'><span className={Estilos.idSpanLink}>'HOME'</span></Link>
       </div>

       <div className={Estilos.idLogout}>
      <Link to='/favorites'><button className={Estilos.botonLogOut}>Favorites</button></Link> <br />
       <button onClick={logout} className={Estilos.botonLogOut}>¡LOGOUT!</button>
       </div>
     </div>
    )
}