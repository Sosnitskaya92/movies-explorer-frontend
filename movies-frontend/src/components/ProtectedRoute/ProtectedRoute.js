import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Preloader from '../Movies/Preloader/Preloader'

function ProtectedRoute({ path, loggedIn, children }) {
  const currentUser = useContext(CurrentUserContext);

  if (!currentUser) return <div><Preloader /></div>

  return (
    <Route exact path={path}>
      {() => (loggedIn ? <>{children}</> : <Redirect to="/" />)}
    </Route>
  );
}

export default ProtectedRoute;