import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies, visible, loadMore, isSubmitting, onDeleteMovie, onHandleBookmark, savedMovies, isThereSortetMovies, isThereSortedSavedMovies }) {

  const location = useLocation();
  
  function renderMovies() {
    if (isSubmitting) {
      return <Preloader />;
    } else if (movies.length !== 0) {
      return (
        <>
          <ul className="cards__list">
            {movies.slice(0, visible).map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                movies={movies}
                onHandleBookmark={onHandleBookmark}
                savedMovies={savedMovies}
              />
            ))}
          </ul>
          {visible < movies.length && (
          <div className="card__btn">
            <button className="cards__more-btn" type="button" onClick={loadMore}>Ещё</button>
          </div>
          )}
        </>
      );
    } else if (isThereSortetMovies) {
      return <></>;
    } else {
      return <p className="cards__nothing-found-text">Ничего не найдено</p>;
    }
  }

  function renderSavedMovies() {
    if (isSubmitting) {
      return <Preloader />;
    } else if (movies.length !== 0) {
      return (
        <ul className="cards__list">
          {movies.map((movie) => (
            <MoviesCard
              key={movie._id}
              id={movie.id}
              movie={movie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
            />
          ))}
        </ul>
      );
    } else if (isThereSortedSavedMovies) {
      return <></>;
    } else {
      return <p className="cards__nothing-found-text">Ничего не найдено</p>;
    }
  }

  return (
    <section className="cards">
      <div className="container">
        {location.pathname === "/movies" ? renderMovies() : renderSavedMovies()}
      </div>
    </section>
  );
}
  

export default MoviesCardList;