import axios from "axios";

//con Async-Await 
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch)=>{
      const {data} = await axios.post(endpoint, character)
      return dispatch({
            type: 'ADD_FAVORITE',
            payload: data,
      }); 
   };
};
//------------------------------------------------------------------------
//con EXRES
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: 'ADD_FAVORITE',
//              payload: data,
//           });
//        });
//     };
//  };
 //------------------------------------------------------------------
 //sin EXRES
    // return{
    //     type: 'ADD_FAVORITE',
    //     payload: character
    // }

    //-----------------con async-await---------------------------
    export const removeFav = (id) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         const {data} = await axios.delete(endpoint)
         return dispatch({
          type: 'REMOVE_FAVORITE',
          payload: data,
       });
    };
   };
   //--------------------con Axios----------------------------------
   //  export const removeFav = (id) => {
   //      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   //      return (dispatch) => {
   //         axios.delete(endpoint).then(({ data }) => {
   //            return dispatch({
   //               type: 'REMOVE_FAVORITE',
   //               payload: data,
   //         });
   //         });
   //      };
   //   };
   //---------------------sin Axios--------------------------
    // return{
    //     type: 'REMOVE_FAVORITE',
    //     payload: id
    // }


export const filterCards = (gender) => {
    return{
        type: 'FILTER',
        payload: gender
    }
}

export const orderCards = (order) => {
    return{
        type: 'ORDER',          
        payload: order
    }
}