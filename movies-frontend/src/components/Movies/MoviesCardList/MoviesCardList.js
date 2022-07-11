import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { Route } from "react-router-dom";
// import Preloader from "../Preloader/Preloader";

function MoviesCardList({ cards }) {
  return (
    <section className="cards">
      <div className="container">
        {/* <Preloader /> */}
        <ul className="cards__list">
          {cards.map((card) => (
            <MoviesCard key={card.id} card={card} />
          ))}
        </ul>
        <div className="card__btn">
          <Route exact path="/movies">
            <button className="cards__more-btn" type="button">Ещё</button>
          </Route>
        </div>
      </div>
    </section>
  );
}

export default MoviesCardList;