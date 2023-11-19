import {
    ADD_TO_FAVORITES,
    GET_MOVIE_LIST_FETCHING,
    MOVIES_FILTER_CHANGED,
    MOVIES_LIST_CHANGED,
    REMOVE_ITEM
} from "../types";
const initialState={
    movies:[],
    fetching:false,
    keyword:'',
    favouriteMovies:[],
}

const movies =(state=initialState,action)=>{
const {payload}=action;
    switch (action.type) {
        case MOVIES_LIST_CHANGED:
            return {
                ...state,
                movies: payload,
            };
        case MOVIES_FILTER_CHANGED:
            return {
                ...state,
                keyword: payload,
            };
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favouriteMovies: [...state.favouriteMovies, payload],
            };
        case GET_MOVIE_LIST_FETCHING:
                return {
                    ...state,
                    fetching: payload,
                }
        case REMOVE_ITEM: {
            return {
                ...state,
                favouriteMovies: payload,
            };
        }
        default:
            return state;
}

}

export default movies