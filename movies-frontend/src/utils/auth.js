function getContent() {
  return fetch("https://api.diploma.sosnitskaya.nomoreparties.sbs/users/me", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// function getContent() {
//   return fetch("http://localhost:3000/users/me", {
//     credentials: "include",
//     cache: "no-cache",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

export default getContent;