class MainApi {
    constructor({ apiUrl, contentType }) {
      this._apiUrl = apiUrl;
      this._contentType = contentType;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    }
  
    signUp(name, email, password) {
      return fetch(this._apiUrl + "/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": this._contentType,
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then(this._checkResponse);
    }
  
    signIn(email, password) {
      return fetch(this._apiUrl + "/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": this._contentType,
        },
        body: JSON.stringify({ email, password }),
      })
        .then(this._checkResponse);
    }
  
    signOut() {
      return fetch(this._apiUrl + "/signout", {
        method: "POST",
        credentials: "include",
      })
        .then(this._checkResponse);
    }
  
    getUserInfo() {
      return fetch(this._apiUrl + "/users/me", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(this._checkResponse);
    }
  
    updateUserInfo(name, email) {
      return fetch(this._apiUrl + "/users/me", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": this._contentType,
        },
        body: JSON.stringify({ name, email }),
      })
        .then(this._checkResponse);
    }
  
    getSavedMovies() {
      return fetch(this._apiUrl + "/movies", {
        credentials: "include",
      })
        .then(this._checkResponse);
    }
  
    createMovie({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      nameRU,
      nameEN,
      movieId,
    }) {
      return fetch(this._apiUrl + "/movies", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": this._contentType,
        },
        body: JSON.stringify({
          country,
          director,
          duration,
          year,
          description,
          image,
          trailerLink,
          thumbnail,
          nameRU,
          nameEN,
          movieId,
        }),
      })
        .then(this._checkResponse);
    }
  
    deleteMovie(movieId) {
      return fetch(this._apiUrl + "/movies/" + movieId, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": this._contentType,
        },
      })
        .then(this._checkResponse);
    }
  }
  
  const mainApi = new MainApi({
    apiUrl: "https://api.diploma.sosnitskaya.nomoreparties.sbs",
    contentType: "application/json",
  });
  
  export default mainApi;