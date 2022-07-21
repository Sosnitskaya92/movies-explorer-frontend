import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import getContent from '../../utils/auth';
import { CONFLICT_ERROR, UNAUTHORIZED_ERROR } from '../../utils/constants'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [errorStatus, setErrorStatus] = useState(false);
  const [errorInfoText, setErrorInfoText] = useState('');
  const [successStatus, setSuccessStatus] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const fetchCurrentUser = () => {
    getContent()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        setCurrentUser({});
        console.log(err);
      });
  };

  useEffect(() => {
    if (loggedIn) return;
    fetchCurrentUser();
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      if (
        location.pathname === '/signin' ||
        location.pathname === '/signup'
      ) {
        history.push('/movies');
      } else {
        history.push(location.pathname);
      }
    }
  }, [loggedIn, history, location.pathname]);

  function renderLoading(isLoading) {
    setIsSubmitting(isLoading);
  }

  function handleRegisterSubmit(evt, name, email, password) {
    evt.preventDefault();
    mainApi
      .signUp(name, email, password)
      .then(() => {
        mainApi
          .signIn(email, password)
          .then(() => {
            setLoggedIn(true);
            fetchCurrentUser();
            history.push('/movies');
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        if (err.status === CONFLICT_ERROR) {
          setErrorStatus(true);
          setErrorInfoText('Пользователь с таким email уже существует.');
        } else {
          setErrorStatus(true);
          setErrorInfoText('При регистрации пользователя произошла ошибка.');
        }
      });
  }

  function handleLoginSubmit(evt, email, password) {
    evt.preventDefault();
    mainApi
      .signIn(email, password)
      .then(() => {
        setLoggedIn(true);
        fetchCurrentUser();
        history.push('/movies');
      })
      .catch((err) => {
        if (err.status === UNAUTHORIZED_ERROR) {
          setErrorStatus(true);
          setErrorInfoText('Вы ввели неправильный логин или пароль.');
        }
      });
  }

  function handleProfileSubmit(name, email) {
    mainApi
      .updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setErrorStatus(false);
        setSuccessStatus(true);
      })
      .catch((err) => {
          console.log(err);
          setErrorStatus(true);
          setErrorInfoText('При обновлении профиля произошла ошибка.');
        });
  }

  function handleSignOut() {
    mainApi
      .signOut()
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem('savedMovies');
        localStorage.removeItem('query');
        localStorage.removeItem('isShort');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/signin">
            <Login
              onLogin={handleLoginSubmit}
              errorStatus={errorStatus}
              errorInfoText={errorInfoText}
              setErrorStatus={setErrorStatus}
            />
          </Route>
          <Route path="/signup">
            <Register
              onRegister={handleRegisterSubmit}
              errorStatus={errorStatus}
              errorInfoText={errorInfoText}
              setErrorStatus={setErrorStatus}
            />
          </Route>

          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Movies
              onRenderLoading={renderLoading}
              isSubmitting={isSubmitting}
              loggedIn={loggedIn}
            />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <SavedMovies
              onRenderLoading={renderLoading}
              isSubmitting={isSubmitting}
              loggedIn={loggedIn}
            />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              onSignOut={handleSignOut}
              onProfileSubmit={handleProfileSubmit}
              errorStatus={errorStatus}
              errorInfoText={errorInfoText}
              successStatus={successStatus}
              setSuccessStatus={setSuccessStatus}
              loggedIn={loggedIn}
            />
          </ProtectedRoute>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;