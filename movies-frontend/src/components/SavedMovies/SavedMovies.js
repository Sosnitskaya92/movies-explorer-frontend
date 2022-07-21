import React, { useState, useEffect } from 'react';
import MoviesCardList from '../../components/Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SeachForm/SeachForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import mainApi from '../../utils/MainApi';
import { filterCheckedMovies, filterMovies } from '../../utils/movieFilter';
import { useLocation } from 'react-router-dom';

function SavedMovies({ onRenderLoading, isSubmitting, loggedIn }) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [sortedSavedMovies, setSortedSavedMovies] = useState([]);
  const [isCheckedSavedMovies, setIsCheckedSavedMovies] = useState(false);
  const [isThereSortedSavedMovies, setIsThereSortedSavedMovies] =
    useState(true);
  const [savedMoviesSearchText, setSavedMoviesSearchText] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getSavedMovies()])
        .then((data) => {
          const [savedMovies] = data;
          setIsThereSortedSavedMovies(true);
          setSavedMovies(savedMovies.movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (isCheckedSavedMovies) {
      const filteredCheckedSavedMovies = filterCheckedMovies(
        savedMovies,
        savedMoviesSearchText
      );
      if (filteredCheckedSavedMovies.length !== 0) {
        setSortedSavedMovies(filteredCheckedSavedMovies);
      } else {
        setSortedSavedMovies(filteredCheckedSavedMovies);
        setIsThereSortedSavedMovies(false);
      }
    } else {
      const filteredSavedMovies = filterMovies(
        savedMovies,
        savedMoviesSearchText
      );
      if (filteredSavedMovies.length !== 0) {
        setSortedSavedMovies(filteredSavedMovies);
      } else {
        setSortedSavedMovies(filteredSavedMovies);
        setIsThereSortedSavedMovies(false);
      }
    }
  }, [isCheckedSavedMovies, savedMovies, savedMoviesSearchText]);

  useEffect(() => {
    setSortedSavedMovies(savedMovies);
    setIsCheckedSavedMovies(false);
    setSavedMoviesSearchText('');
  }, [location.pathname, savedMovies]);

  function handleSavedMoviesCheckboxBtnClick() {
    setIsCheckedSavedMovies(!isCheckedSavedMovies);
  }

  function handleDeleteMovie(movieId) {
    mainApi.deleteMovie(movieId).then(() => {
      setSavedMovies((state) => state.filter((movie) => movie._id !== movieId));
    });
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <SearchForm
          setSavedMoviesSearchText={setSavedMoviesSearchText}
          onRenderLoading={onRenderLoading}
          onChecked={setSavedMoviesSearchText}
          onCheckedSavedMovies={handleSavedMoviesCheckboxBtnClick}
          isCheckedSavedMovies={isCheckedSavedMovies}
        />
        <MoviesCardList
          movies={sortedSavedMovies}
          onDeleteMovie={handleDeleteMovie}
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
