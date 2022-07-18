import React from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList"
import SearchForm from "../Movies/SeachForm/SeachForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies({ movies, visible, loadMore, isChecked, onChecked, onSearchText, onRenderLoading, isSubmitting, onHandleBookmark, savedMovies, isThereSortetMovies, loggedIn }) {

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <SearchForm 
          onChecked={onChecked}
          onSearchText={onSearchText}
          onRenderLoading={onRenderLoading}
          isChecked={isChecked}
        />
        <MoviesCardList 
          movies={movies}
          visible={visible}
          loadMore={loadMore}
          isSubmitting={isSubmitting}
          onHandleBookmark={onHandleBookmark}
          savedMovies={savedMovies}
          sortedMovies={movies}
          isThereSortetMovies={isThereSortetMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;