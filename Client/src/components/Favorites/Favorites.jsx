import { connect} from "react-redux";
import Card from '../Card'
import Estilos from './favorites.module.css'
import { useDispatch } from "react-redux";
import {orderCards, filterCards} from '../redux/actions'
//linea 6
function Favorites({myFavorites}){
 const dispatch = useDispatch();
    return(
    
        <div>
            <select name="order" onClick={(event)=>{dispatch(orderCards(event.target.value))}} className={Estilos.select}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="filter" onClick={(event)=>{dispatch(filterCards(event.target.value))}} className={Estilos.select}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        

        <div  className={Estilos.divFavoritosCard}>
        {myFavorites?.map(({id, name, species,image, gender}) => (
                <Card 
                key={id} 
                id={id} 
                name={name} 
                species={species} 
                image={image}
                gender={gender}
                />
                ))}
        </div>
    </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)