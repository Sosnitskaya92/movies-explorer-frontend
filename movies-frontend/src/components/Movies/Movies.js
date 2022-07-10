import React from "react";
import { cards } from "../../utils/cards";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList"
import SearchForm from "../Movies/SeachForm/SeachForm";

function Movies() {

  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList cards={cards} />
    </main>
  );
}

export default Movies;