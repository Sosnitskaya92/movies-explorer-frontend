import React from "react";
import MoviesCardList from "../../components/Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SeachForm/SeachForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function SavedMovies({ savedMovies, onDeleteMovie, setSavedMoviesSearchText, onRenderLoading, onChecked, onCheckedSavedMovies, isCheckedSavedMovies, isThereSortedSavedMovies, isSubmitting, loggedIn }) {
  
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <SearchForm 
          setSavedMoviesSearchText={setSavedMoviesSearchText}
          onRenderLoading={onRenderLoading}
          onChecked={onChecked}
          onCheckedSavedMovies={onCheckedSavedMovies}
          isCheckedSavedMovies={isCheckedSavedMovies}
        />
        <MoviesCardList 
          movies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          savedMovies={savedMovies}
          isThereSortedSavedMovies={isThereSortedSavedMovies}
          isSubmitting={isSubmitting}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;