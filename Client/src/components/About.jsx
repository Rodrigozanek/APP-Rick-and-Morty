import React from "react"
import Estilos from './About.module.css'

export default function About() {
    return(
        <div> 
            <h1 className={Estilos.titulo}>Acerca de la App:</h1>
            <div className={Estilos.contenedorDelTexto}>
            <p className={Estilos.p}>Creador: Rodrigo Zanek.</p>
            <p className={Estilos.p}>Fin de la App: Practica.</p>
            </div>
        </div>
    )
}