import React from 'react';
import styles from './Search.module.scss'
import 'font-awesome/css/font-awesome.min.css';
import {useDispatch, useSelector} from "react-redux";
import {changeMovieFilter} from "../../../redux/actions/movies";


const Search = () => {
    const {keyword} = useSelector(state => state.movies);
    const dispatch = useDispatch()

    const onInputValueChange = (e) => {
        const {value} = e.target;

        dispatch(changeMovieFilter(value))
    }

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
                <i className="fa fa-search"></i>
            </div>
            <input
                value={keyword}
                type="search"
                className={styles.input}
                placeholder="Search..."
                onChange={onInputValueChange}
            />
        </div>
    );
};

export default Search;