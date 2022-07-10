import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

function MoviesCard({ id, card }) {
  const [isLiked, setIsLiked] = useState(false);

  const cardBookmarkClassName = `movies-card__bookmark ${
    isLiked
      ? "movies-card__bookmark_state_active"
      : "movies-card__bookmark_state_inactive"
  }`;

  function handleCardLike() {
    setIsLiked(!isLiked);
  }

  return (
    <li className="movies-card">
      <div className="movies-card__top">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{card.duration}</p>
        </div>
      </div>
      <img className="movies-card__img" src={card.image} alt={card.nameRU} />
      <Switch>
          <Route exact path="/movies">
            <button className={cardBookmarkClassName} type="button" onClick={handleCardLike}></button>
          </Route>
          <Route path="/saved-movies">
            <button className="movies-card__delete-btn" type="button"></button>
          </Route>
        </Switch>
    </li>
  );
}

export default MoviesCard;