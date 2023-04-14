import Estilos from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from './redux/actions';
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({name, image, species, gender, onClose, id, myFavorites, removeFav, addFav}) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
    if(isFav){
      setIsFav(false);
      removeFav(id);
    }else{
      setIsFav(true)
      addFav({name, image, species, gender, onClose, id})
    }
   }

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      })
   }, [myFavorites]);

   return (
      <div className={Estilos.idCard}>
         <div className={Estilos.idCorazon}>
         {
      isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
          )
      }
         </div>
         
         <button className={Estilos.idBoton} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         <img  src={image} alt="image not found" />
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </Link>
      </div>
   );
}

const  mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) =>{
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);