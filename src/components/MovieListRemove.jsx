import React from 'react';
import RemoveFavourites from './RemoveFavourites';


const MovieList = (props) =>{
    const FavoriteComponent = props.favoriteComponent;

    return(
        <>
            {props.movies.map((movie, index)=>(
                <div className='image-container d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt="movie" />
                <div 
                    onClick={() => props.handleFavouriteClick(movie)}
                    className='overlay d-flex align-item-center justify-content-center'>
                    <RemoveFavourites/>
                
                </div>
            </div>
            ))}
        </>
    );
};

export default MovieList;