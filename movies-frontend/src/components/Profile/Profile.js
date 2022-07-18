import React from "react";
import { useState,  useContext, useEffect  } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";

function Profile({
  onSignOut,
  onProfileSubmit,
  errorStatus,
  errorInfoText,
  successStatus,
  setSuccessStatus,
  loggedIn,
}) {

  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameValidation, setNameValidation] = useState({
    nameValidationMessage: "",
    isNameValid: false,
  });
  const [emailValidation, setEmailValidation] = useState({
    EmailValidationMessage: "",
    isEmailValid: false,
  });
  const currentUser = useContext(CurrentUserContext);

  function handleEditBtnClick() {
    setIsClicked(!isClicked);
    setSuccessStatus(false);
  }

  useEffect(() => {
    if (errorStatus) {
      setIsClicked(true);
    }
  }, [errorStatus]);

  function handleNameChange(evt) {
    setName(evt.target.value);
    const { validationMessage } = evt.target;
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

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onProfileSubmit(name, email);
  }

  return (

    <>
    <Header loggedIn={loggedIn} />
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form" name="profile" onSubmit={handleSubmit}>
          <fieldset className="profile__form-field">
          <div className="profile__input-container">
              <span className="profile__form-input-name">Имя</span>
              <input
                className="profile__form-input"
                type="text"
                id="profile-name-input"
                name="profileName"
                value={name || ""}
                minLength="2"
                maxLength="30"
                required={true}
                noValidate
                autoComplete="off"
                disabled={isClicked ? false : errorStatus ? false : true}
                onChange={handleNameChange}
              />
            </div>
            <span
              className={`form__input-error name-input-error ${
                !nameValidation.isNameValid ? "form__input-error_active" : ""
              }`}
            >
              {nameValidation.nameValidationMessage}
            </span>
          </fieldset>
          <fieldset className="profile__form-field">
          <div className="profile__input-container">
              <span className="profile__form-input-name">E-mail</span>
              <input
                className="profile__form-input"
                id="profile-email-input"
                type="email"
                name="profileEmail"
                value={email || ""}
                autoComplete="off"
                required={true}
                noValidate
                disabled={isClicked ? false : errorStatus ? false : true}
                onChange={handleEmailChange}
              />
            </div>
            <span
              className={`form__input-error profile-email-input-error ${
                !emailValidation.isEmailValid ? "form__input-error_active" : ""
              }`}
            >
              {emailValidation.emailValidationMessage}
            </span>
          </fieldset>
          <div className="profile__footer">
          {errorStatus ? (
              <span className="account-form__server-error">
                {errorInfoText}
              </span>
            ) : (
              <></>
            )}
            {successStatus ? (
              <span className="profile__success-request-text">
                Профиль успешно обновлён.
              </span>
            ) : (
              <></>
            )}
            <button className="profile__edit-btn" type={!isClicked ? "submit" : errorStatus ? "submit" : "button"} onClick={handleEditBtnClick}      disabled={
                name === currentUser.name &&
                email === currentUser.email &&
                isClicked
                  ? true
                  : false
              }>{isClicked
                ? "Сохранить"
                : errorStatus
                ? "Сохранить"
                : "Редактировать"}</button>
            <NavLink className="profile__exit-btn" to="/signin" onClick={onSignOut}>
               Выйти из аккаунта
            </NavLink>
          </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Profile;