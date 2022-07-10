import React from "react";
import { cards } from "../../utils/cards";
import MoviesCardList from "../../components/Movies/MoviesCardList/MoviesCardList"
import SearchForm from "../SeachForm/SeachForm";

function Movies() {

  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList cards={cards} />
    </main>
  );
}

export default Movies;