const  initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_FAVORITE':
            return { ...state, myFavorites: payload, allCharacters: payload };
        // case 'ADD_FAVORITE':
        //     return{
        //         ...state,
        //         allCharacters: [...state.allCharacters, payload],
        //         myFavorites: [...state.allCharacters, payload]
        //     };

        case 'REMOVE_FAVORITE':
            return { ...state, myFavorites: payload, allCharacters: payload };
        // case 'REMOVE_FAVORITE':
        //     const filtro = state.myFavorites.filter((character) =>character.id !== payload)
        //     return{
        //         ...state,
        //         myFavorites: filtro
        //     }
          
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