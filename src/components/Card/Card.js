import React from 'react';
import styles from './Card.module.scss';

const Card = ({card, handleClick, isFavorite, handleRemoveItem}) => {
    const {Poster, Title, imdbID} = card;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img className={styles.img} src={Poster} alt={Title}/>
                <div className={styles.title}>{Title}
                    {isFavorite ? <button className={styles.icon} onClick={() => handleRemoveItem(imdbID)}>-</button>
                        :
                        <button className={styles.icon} onClick={() => handleClick(card)}>+</button>
                    }</div>

            </div>
        </div>
    );
};

export default Card;
