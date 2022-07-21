class MoviesApi {
    constructor({ apiUrl, contentType }) {
      this._apiUrl = apiUrl;
      this._contentType = contentType;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }
  
    getAllMovies() {
      return fetch(this._apiUrl).then(this._checkResponse);
    }
  }
  
  const movieApi = new MoviesApi({
    apiUrl: "https://api.nomoreparties.co/beatfilm-movies",
    contentType: "application/json",
  });
  
  export default movieApi;