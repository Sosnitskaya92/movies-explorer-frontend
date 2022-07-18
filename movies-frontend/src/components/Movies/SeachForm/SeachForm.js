import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ onChecked, onSearchText, onRenderLoading, onCheckedSavedMovies, isChecked, isCheckedSavedMovies, setSavedMoviesSearchText }) {

  let location = useLocation();
  const [text, setText] = useState("");
  const [errorClassName, setErrorClassName] = useState(
    "form__input-error text-input-error"
  );

  function handleTextChange(evt) {
    setText(evt.target.value);
  }

  function handleSubmit(searchTextFnc) {

    onRenderLoading(true);
    if (!text) {
      return setErrorClassName(errorClassName + " form__input-error_active");
    } else {
      searchTextFnc(text);
      setTimeout(() => {
        onRenderLoading(false);
      }, 300);
      return setErrorClassName("form__input-error text-input-error");
    }
  }

  function handleMoviesSubmit(evt) {
    evt.preventDefault();
    handleSubmit(onSearchText);
  }

  function handleSavedMoviesFilterSubmit(evt) {
    evt.preventDefault();
    handleSubmit(setSavedMoviesSearchText);
  }

  return (
    <section className="search-form">
      <div className="container">
        {location.pathname === "/movies" ? ( 
          <form className="form" onSubmit={handleMoviesSubmit}>
            <fieldset className="form__fieldset">
              <input className="form__input" type="text" placeholder="Фильм" name="searchText" value={text || ""} onChange={handleTextChange}/>
              <button className="form__submit-btn" type="submit"></button>
            </fieldset>
            <span className={errorClassName}>Нужно ввести ключевое слово</span>
            <fieldset className="form__fieldset-checkbox">
                <input className="form__checkbox" type="checkbox"  onClick={onChecked} defaultChecked={isChecked ? true : false} />
              <p className="form__checkbox-name">Короткометражки</p>
            </fieldset>
          </form>
        ) : (
          <form className="form" onSubmit={handleSavedMoviesFilterSubmit}>
            <fieldset className="form__fieldset">
              <input className="form__input" type="text" placeholder="Фильм" name="searchText" value={text || ""} onChange={handleTextChange}/>
              <button className="form__submit-btn" type="submit"></button>
            </fieldset>
            <span className={errorClassName}>Нужно ввести ключевое слово</span>
            <fieldset className="form__fieldset-checkbox">
                <input className="form__checkbox" type="checkbox"  onClick={onCheckedSavedMovies} defaultChecked={isCheckedSavedMovies ? true : false} />
              <p className="form__checkbox-name">Короткометражки</p>
            </fieldset>
          </form>
        )}
      </div>
    </section>
  );
}

export default SearchForm;