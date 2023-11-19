// Favourites.js
import React from 'react';
import styles from './Favourites.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../Card/Card';
import {removeItem} from "../../redux/actions/movies";

const Favourites = () => {
    const {favouriteMovies} = useSelector((state) => state.movies);
    const isFavorite = true;
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        const updatedFavorites = favouriteMovies.filter((item) => item.imdbID !== id);

        dispatch(removeItem(updatedFavorites));
    };

    return (
        <>
            <div className={styles.headTitle}>Favourites</div>
            <div className={styles.body}>
                {favouriteMovies.map((favCard) => {
                    return (
                        <Card
                            key={favCard.Title}
                            card={favCard}
                            handleRemoveItem={handleRemoveItem}
                            isFavorite={isFavorite}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Favourites;
