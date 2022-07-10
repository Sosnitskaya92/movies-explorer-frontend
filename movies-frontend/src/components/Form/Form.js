import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";

function Form() {
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
    console.log(evt.target.validationMessage);
    setNameValidation({
      nameValidationMessage: validationMessage,
      isNameValid: evt.target.validity.valid,
    });
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
    const { validationMessage } = evt.target;
    setEmailValidation({
      emailValidationMessage: validationMessage,
      isEmailValid: evt.target.validity.valid,
    });
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
    const { validationMessage } = evt.target;
    setPasswordValidation({
      passwordValidationMessage: validationMessage,
      isPasswordValid: evt.target.validity.valid,
    });
  }

  return (
    <section className="account-form">
      <div className="account-form__container">
        <Link to="/" className="account-form__logo"></Link>
        <Switch>
          <Route exact path="/signin">
            <h2 className="account-form__title">Рады видеть!</h2>
            <form className="account-form" name="login">
              <fieldset className="account-form__field">
                <label className="account-form__input-label">email</label>
                <input className="account-form__input" type="email" id="login-email-input" name="loginEmail" value={email} autoComplete="off" required={true} noValidate onChange={handleEmailChange} />
                <span className={`form__input-error login-email-input-error ${!emailValidation.isEmailValid ? "form__input-error_active" : ""}`}>{emailValidation.emailValidationMessage}</span>
              </fieldset>
              <fieldset className="account-form__field">
                <label className="account-form__input-label">Пароль</label>
                <input className="account-form__input" type="password" id="login-password-input" name="loginPassword" value={password} minLength="8" maxLength="100" autoComplete="off" required={true} noValidate onChange={handlePasswordChange} />
                <span className={`form__input-error login-password-input-error ${!passwordValidation.isPasswordValid ? "form__input-error_active" : ""}`} >{passwordValidation.passwordValidationMessage}</span>
              </fieldset>
              <div className="account-form__footer-login">
                <button className="account-form__submit-btn">Войти</button>
                <p className="account-form__caption">Ещё не зарегистрированы?&nbsp;<span>
                    <Link className="account-form__caption-link" to="/signup">
                      Зарегистрироваться
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </Route>
          <Route path="/signup">
            <h2 className="account-form__title">Добро пожаловать!</h2>
            <form className="account-form" name="register">
              <fieldset className="account-form__field">
                <label className="account-form__input-label">Имя</label>
                <input className="account-form__input" type="text" id="register-name-input" name="registerName" value={name || ""} minLength="2" maxLength="30" required={true} noValidate onChange={handleNameChange} />
                <span className={`form__input-error name-input-error ${!nameValidation.isNameValid ? "form__input-error_active" : ""}`}>{nameValidation.nameValidationMessage}</span>
              </fieldset>
              <fieldset className="account-form__field">
                <label className="account-form__input-label">email</label>
                <input className="account-form__input" id="register-email-input" type="email" name="registerEmail" value={email || ""} autoComplete="off" required={true} noValidate onChange={handleEmailChange} />
                <span className={`form__input-error register-email-input-error ${!emailValidation.isEmailValid ? "form__input-error_active" : ""}`}>{emailValidation.emailValidationMessage}</span>
              </fieldset>
              <fieldset className="account-form__field">
                <label className="account-form__input-label">Пароль</label>
                <input className="account-form__input" type="password" id="register-password-input" name="registerPassword" value={password} minLength="8" maxLength="100" autoComplete="off" required={true} noValidate onChange={handlePasswordChange} />
                <span className={`form__input-error register-password-input-error ${!passwordValidation.isPasswordValid ? "form__input-error_active" : ""}`}>{passwordValidation.passwordValidationMessage}</span>
              </fieldset>
              <div className="account-form__footer-register">
                <button type="submit" className="account-form__submit-btn">Зарегистрироваться</button>
                <p className="account-form__caption">Уже зарегистрированы?&nbsp;
                  <span>
                    <Link className="account-form__caption-link" to="/signin">
                      Войти
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Form;