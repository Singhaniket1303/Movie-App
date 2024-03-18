import React from 'react';
import AddFavorites from './AddFavorite';


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
                    <AddFavorites/>
                
                </div>
            </div>
            ))}
        </>
    );
};

export default MovieList;