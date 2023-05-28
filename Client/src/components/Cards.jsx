import Card from './Card';
import Estilos from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
     <div className={Estilos.contenedor}>
      {characters.map(character =>(
         <Card
         id={character.id}
         key={character.id}
         name={character.name}
         species={character.species}
         gender={character.gender}
         image={character.image}
         onClose={onClose}
         origin={character.origin?.name}
         status={character.status}

         // onClose={() => props.onClose(id)}
         />))}
     </div>
   );
}
