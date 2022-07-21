import React, { useState, useEffect } from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SeachForm/SeachForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import mainApi from '../../utils/MainApi';
import movieApi from '../../utils/MoviesApi';
import { filterCheckedMovies, filterMovies } from '../../utils/movieFilter';
import useWindowSize from '../../utils/useWindowSize';

const getSortedMovies = (movies, query, isShort) => {
  const savedMoviesKey = 'savedMovies';
  const savedMoviesInStorage = localStorage.getItem(savedMoviesKey);

  const savedMovies = savedMoviesInStorage
    ? JSON.parse(savedMoviesInStorage)
    : [];

  const savedByQuery = savedMovies.find(
    (item) => item.query === query && item.isShort === isShort
  );

  if (savedByQuery && savedByQuery.list.length !== 0) {
    console.log('loaded from localStorage');
    return savedByQuery.list;
  }

  const moviesFormAPI = isShort
    ? filterCheckedMovies(movies, query)
    : filterMovies(movies, query);

  savedMovies.push({ query, isShort, list: moviesFormAPI });
  localStorage.setItem(savedMoviesKey, JSON.stringify(savedMovies));

  console.log('loaded from API');
  return moviesFormAPI;
};

function Movies({ onRenderLoading, isSubmitting, loggedIn }) {
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem('isShort') === 'true'
  );
  const [isThereSortetMovies, setIsThereSortedMovies] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchText, setSearchText] = useState(
    localStorage.getItem('query') || ''
  );
  const [visible, setVisible] = useState(0);
  const [width] = useWindowSize();

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getSavedMovies(), movieApi.getAllMovies()])
        .then((data) => {
          const [savedMovies, allMovies] = data;
          setIsThereSortedMovies(true);
          setSavedMovies(savedMovies.movies);
          setMovies(allMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    const sortedMoviesByQuery = getSortedMovies(movies, searchText, isChecked);

    if (sortedMoviesByQuery.length !== 0) {
      setSortedMovies(sortedMoviesByQuery);
    } else {
      setSortedMovies(sortedMoviesByQuery);
      setIsThereSortedMovies(false);
    }

    localStorage.setItem('query', searchText);
    localStorage.setItem('isShort', isChecked);
  }, [isChecked, searchText, movies]);

  useEffect(() => {
    if (width > 768) {
      return setVisible(12);
    } else if (width <= 768 && width > 321) {
      return setVisible(8);
    } else if (width <= 320) {
      return setVisible(5);
    }
  }, [width]);

  function handleMoviesCheckboxBtnClick() {
    setIsChecked(!isChecked);
  }

  function handleBookmarkMovieStatus(movie) {
    const isBookmark = savedMovies.some((i) => i.nameRU === movie.nameRU);
    if (!isBookmark) {
      const {
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        id,
      } = movie;
      mainApi
        .createMovie({
          country,
          director,
          duration,
          year,
          description,
          image: `https://api.nomoreparties.co${image.url}`,
          trailerLink,
          thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
          nameRU,
          nameEN,
          movieId: id,
        })
        .then((data) => {
          setSavedMovies([data.movie, ...savedMovies]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const currentSavedMovie = savedMovies.filter(
        (item) => item.nameRU === movie.nameRU
      );
      mainApi
        .deleteMovie(currentSavedMovie[0]._id)
        .then(() => {
          setSavedMovies((state) =>
            state.filter((k) => k._id !== currentSavedMovie[0]._id)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function hanleMoreBtnClick() {
    if (width > 768) {
      setVisible(visible + 3);
    } else if (width <= 768) {
      setVisible(visible + 2);
    }
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <SearchForm
          searchText={searchText}
          onChecked={handleMoviesCheckboxBtnClick}
          onSearchText={setSearchText}
          onRenderLoading={onRenderLoading}
          isChecked={isChecked}
        />
        <MoviesCardList
          movies={sortedMovies}
          visible={visible}
          loadMore={hanleMoreBtnClick}
          isSubmitting={isSubmitting}
          onHandleBookmark={handleBookmarkMovieStatus}
          savedMovies={savedMovies}
          isThereSortetMovies={isThereSortetMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;