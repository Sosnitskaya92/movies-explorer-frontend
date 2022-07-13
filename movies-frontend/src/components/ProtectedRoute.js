import React from "react";
import { Route, Redirect } from "react-router";

function ProtectedRoute({ path, loggedIn, children }) {
  return (
    <Route exact path={path}>
      {() => (loggedIn ? <>{children}</> : <Redirect to="/" />)}
    </Route>
  );
}

export default ProtectedRoute;