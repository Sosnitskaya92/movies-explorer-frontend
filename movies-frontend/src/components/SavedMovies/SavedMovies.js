import React from "react";
import MoviesCardList from "../../components/Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SeachForm/SeachForm";
import { cards } from "../../utils/savedCard";

function SavedMovies() {
  
  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList cards={cards} />
    </main>
  );
}

export default SavedMovies;