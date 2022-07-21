import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Form({ onLogin, onRegister, errorStatus, errorInfoText, setErrorStatus }) {

  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameValidation, setNameValidation] = useState({
    nameValidationMessage: "",
    isNameValid: false,
  });
  const [emailValidation, setEmailValidation] = useState({
    EmailValidationMessage: "",
    isEmailValid: false,
  });
  const [passwordValidation, setPasswordValidation] = useState({
    passwordValidationMessage: "",
    isPasswordValid: false,
  });

  function handleNameChange(evt) {
    setName(evt.target.value);

    const { validationMessage } = evt.target;

    setNameValidation({
      nameValidationMessage: validationMessage,
      isNameValid: evt.target.validity.valid,
    });
    setErrorStatus(false);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);

    const { validationMessage } = evt.target;

    setEmailValidation({
      emailValidationMessage: validationMessage,
      isEmailValid: evt.target.validity.valid,
    });
    setErrorStatus(false);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);

    const { validationMessage } = evt.target;

    setPasswordValidation({
      passwordValidationMessage: validationMessage,
      isPasswordValid: evt.target.validity.valid,
    });
    setErrorStatus(false);
  }

  function handleRegisterFormSubmit(evt) {
    onRegister(evt, name, email, password);
  }

  function handleLoginFormSubmit(evt) {
    onLogin(evt, email, password);
  }

  function handleRouteChangeClick() {
    setErrorStatus(false);
  }

  return (
    <section className="account-form">
      <div className="account-form__container">
        <Link to="/" className="account-form__logo"></Link>
        {location.pathname === "/signin" ? (
          <>
            <h2 className="account-form__title">Рады видеть!</h2>
            <form className="account-form" name="login" onSubmit={handleLoginFormSubmit}>
              <fieldset className="account-form__field">
                <label className="account-form__input-label">email</label>
                <input className="account-form__input" type="email" id="login-email-input" name="loginEmail" value={email} autoComplete="off" required={true} noValidate onChange={handleEmailChange} pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$" />
                <span className={`form__input-error login-email-input-error ${!emailValidation.isEmailValid ? "form__input-error_active" : ""}`}>{emailValidation.emailValidationMessage}</span>
              </fieldset>
              <fieldset className="account-form__field">
                <label className="account-form__input-label">Пароль</label>
                <input className="account-form__input" type="password" id="login-password-input" name="loginPassword" value={password} minLength="8" maxLength="100" autoComplete="off" required={true} noValidate onChange={handlePasswordChange} />
                <span className={`form__input-error login-password-input-error ${!passwordValidation.isPasswordValid ? "form__input-error_active" : ""}`} >{passwordValidation.passwordValidationMessage}</span>
              </fieldset>
              <div className="account-form__footer-login">
              {errorStatus ? ( 
                <span className="account-form__server-error">{errorInfoText}</span>
              ) : (
                <></>
              )}
              <button className="account-form__submit-btn" disabled={ !emailValidation.isEmailValid || !passwordValidation.isPasswordValid ? true : false }>Войти</button>
              <p className="account-form__caption">Ещё не зарегистрированы?&nbsp;
              <span>
                <Link className="account-form__caption-link" to="/signup" onClick={handleRouteChangeClick}>
                  Зарегистрироваться
                </Link>
              </span>
              </p>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="account-form__title">Добро пожаловать!</h2>
            <form className="account-form" name="register" onSubmit={handleRegisterFormSubmit}>
              <fieldset className="account-form__field">
                <label className="account-form__input-label">Имя</label>
                <input className="account-form__input" type="text" id="register-name-input" name="registerName" value={name || ""} minLength="2" maxLength="30" required={true} noValidate onChange={handleNameChange} autoComplete="off"/>
                <span className={`form__input-error name-input-error ${!nameValidation.isNameValid ? "form__input-error_active" : ""}`}>{nameValidation.nameValidationMessage}</span>
              </fieldset>
              <fieldset className="account-form__field">
                <label className="account-form__input-label">email</label>
                <input className="account-form__input" id="register-email-input" type="email" name="registerEmail" value={email || ""} autoComplete="off" required={true} noValidate onChange={handleEmailChange} pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"/>
                <span className={`form__input-error register-email-input-error ${!emailValidation.isEmailValid ? "form__input-error_active" : ""}`}>{emailValidation.emailValidationMessage}</span>
              </fieldset>
              <fieldset className="account-form__field">
                <label className="account-form__input-label">Пароль</label>
                <input className="account-form__input" type="password" id="register-password-input" name="registerPassword" value={password} minLength="8" maxLength="100" autoComplete="off" required={true} noValidate onChange={handlePasswordChange} />
                <span className={`form__input-error register-password-input-error ${!passwordValidation.isPasswordValid ? "form__input-error_active" : ""}`}>{passwordValidation.passwordValidationMessage}</span>
              </fieldset>
              <div className="account-form__footer-register">
              {errorStatus ? ( 
                <span className="account-form__server-error">{errorInfoText}</span>
              ) : (
                <></>
              )}
              <button type="submit" className="account-form__submit-btn"  disabled={!nameValidation.isNameValid || !emailValidation.isEmailValid || !passwordValidation.isPasswordValid ? true : false}>Зарегистрироваться</button>
              <p className="account-form__caption">Уже зарегистрированы?&nbsp;
              <span>
                <Link className="account-form__caption-link" to="/signin" onClick={handleRouteChangeClick}>
                  Войти
                </Link>
              </span>
              </p>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default Form;