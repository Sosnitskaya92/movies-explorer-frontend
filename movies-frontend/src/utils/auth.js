function getContent() {
    return fetch("https://api.diploma.sosnitskaya.nomoreparties.sbs/users/me", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  
  export default getContent;