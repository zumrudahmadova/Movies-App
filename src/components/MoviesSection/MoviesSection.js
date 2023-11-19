import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieList, setFavouriteCard} from '../../redux/actions/movies';
import Card from '../Card/Card';
import styles from './MoviesDection.module.scss';

const MoviesSection = () => {
    const {movies, loading} = useSelector(state => state.movies);
    const {keyword} = useSelector((state) => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieList());
    }, [dispatch]);

    const filteredMovies = useMemo(() => {
        return movies.filter((item) => item.Title.toLowerCase().includes(keyword.toLowerCase()));
    }, [keyword, movies]);

    const handleClick = (card) => {
        dispatch(setFavouriteCard(card));
    };


    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2 className={styles.section_title}>Movies</h2>
                    <div className={styles.container}>
                        {filteredMovies.map((movie) => {
                            return (
                                <Card
                                    key={movie.Title}
                                    card={movie}
                                    handleClick={handleClick}

                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoviesSection;
