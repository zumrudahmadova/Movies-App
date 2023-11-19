import {
    ADD_TO_FAVORITES,
    GET_MOVIE_LIST_FETCHING,
    MOVIES_FILTER_CHANGED,
    MOVIES_LIST_CHANGED,
    REMOVE_ITEM
} from "../types";
import {getMoviesList} from "../../services/api";
import axios from "axios";

export const getMovieList=()=>async dispatch=>{
    try{
        dispatch(setMoviesFetching(true));
        const response=await axios.get(getMoviesList)

        if (!response) {
            dispatch(setMoviesFetching(false));
            return;
        }
        dispatch(setMoviesList(response.data.Search));
        dispatch(setMoviesFetching(false))
    }
    catch(e){
        console.log(e)
    }

}
export const setMoviesList=payload=>({
    type:MOVIES_LIST_CHANGED,
    payload,
})

export const changeMovieFilter=payload=>({
    type:MOVIES_FILTER_CHANGED,
    payload,
})

export const setFavouriteCard = (payload) => ({
        type: ADD_TO_FAVORITES,
        payload,

})

export const setMoviesFetching = payload => ({
    type: GET_MOVIE_LIST_FETCHING,
    payload,
})


export const removeItem = (updatedFavorites) =>({
        type: REMOVE_ITEM,
        payload: updatedFavorites,

})
