import React from "react";
import Form from "../Form/Form";

function Login({ onLogin, errorStatus, errorInfoText, setErrorStatus }) {
  return  (
    <Form
      onLogin={onLogin}
      errorStatus={errorStatus}
      errorInfoText={errorInfoText}
      setErrorStatus={setErrorStatus}
    />
  );
}

export default Login;