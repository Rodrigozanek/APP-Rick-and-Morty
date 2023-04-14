import { useState } from 'react';
import Estilos from './SearchBar.module.css';


export default function SearchBar(props) {
   const [character, setCharacter] = useState("")
   const handleInputChange = (event) =>{
      const {value} = event.target
      setCharacter(value)
   }

   return (
      <div className={Estilos.div}>
         <input className={Estilos.search} type='search' onChange={handleInputChange} />
      <button className={Estilos.buttonSearch} onClick={() =>props.onSearch(character)}>Agregar</button>
      </div>
   );
}
