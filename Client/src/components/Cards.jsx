import Card from './Card';
import Estilos from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
     <div className={Estilos.contenedor}>
      {characters.map(({id, name, species, gender, image}) =>(
         <Card
         id={id}
         key={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         onClose={() => props.onClose(id)}
         />))}
     </div>
   );
}
