import React, { useState ,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorite";
import RemoveFavourites from "./components/RemoveFavourites";
import MovieListRemove from "./components/MovieListRemove"

const App =  () =>{
  const [movies,setMovies] = useState([]);
  const [favourites,setFavourites] = useState([]);
  const [searchValue,setSearchValue] = useState('');


  const getMovieRequest = async ()=>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d52cef22`;

    const response = await fetch(url);
    const responseJson = await response.json();

   if(responseJson.Search){
     setMovies(responseJson.Search);
   }
  };

  useEffect(()=>{ 
    getMovieRequest();
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites =JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );
    setFavourites(movieFavorites ||[]);
  }, []);

 const saveToLocalStorage = (items) =>{
  localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
 }

const addFavoriteMovie = (movie) => {
  const newFavouriteList = [...favourites,movie];
  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
};

const removeFavouriteMovie = (movie)=>{
  const newFavouriteList = favourites.filter(
    (favourite) => favourite.imdbID !== movie.imdbID 
  );
  setFavourites(newFavouriteList);
};

  return  (
    <div className='.container movie-app'>
    <div className=' d-flex align-items-center mt-4 mb-4 ' >
      <MovieListHeading heading ='Movies'/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
    <div className='yes'>
      <MovieList movies={movies} handleFavouriteClick={addFavoriteMovie} favouriteComponent={AddFavorites} />
    </div>
    <div className=' d-flex align-items-center mt-4 mb-4 ' >
      <MovieListHeading heading ='Favourite'/>
    </div>
    <div className='yes'>
      <MovieListRemove
      movies={favourites}
      handleFavouriteClick={removeFavouriteMovie} 
      favouriteComponent={RemoveFavourites} />
    </div>
    </div>
  );
};


export default App;