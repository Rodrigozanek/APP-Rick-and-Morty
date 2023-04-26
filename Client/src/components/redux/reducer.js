const  initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_FAVORITE':
            return{
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.allCharacters, payload]
            };
            // let copy1 = state.myFavorites;
            // copy1.push(payload)
            // return{...state, myFavorites: copy1};

        case 'REMOVE_FAVORITE':
            const filtro = state.myFavorites.filter((character) =>character.id !== payload)
            return{
                ...state,
                myFavorites: filtro
            }
            // let copy2 = state.myFavorites.filter((char) =>{
            // return char.id !== Number(payload)
            // });
            // return {...state, myFavorites: copy2};
        case 'FILTER':
            const filtroGender = [...state.allCharacters].filter((char)=>char.gender === payload)
            return{
                ...state,
                myFavorites: filtroGender
            }
        case 'ORDER':
            const filterOrderChar = [...state.allCharacters].sort((a, b) => {
                if (a.id > b.id) {
                    return payload === 'Ascendente?' ? 1 : -1;
                }else if (a.id < b.id){
                    return payload === 'Descendente' ? -1 : 1
                }else{
                    return 0
                }
            });
            return{
                ...state,
                myFavorites: filterOrderChar,
            }

        default:
            return {...state}
    }
};

export default reducer;     