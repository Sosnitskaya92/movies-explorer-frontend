import React from "react";
import Form from "../Form/Form";

function Register({ onRegister, errorStatus, errorInfoText, setErrorStatus }) {
  return (
    <Form 
      onRegister={onRegister}
      errorStatus={errorStatus}
      errorInfoText={errorInfoText}
      setErrorStatus={setErrorStatus}
    />
  )
}

export default Register;