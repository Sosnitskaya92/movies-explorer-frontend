import React from "react";
import { Link } from "react-router-dom";

function Profile() {

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form" name="profile">
          <fieldset className="profile__form-field">
            <span className="profile__form-input-name">Имя</span>
            <input className="profile__form-input" type="text" name="profileName" value="Виталий" />
          </fieldset>
          <fieldset className="profile__form-field">
            <span className="profile__form-input-name">E-mail</span>
            <input className="profile__form-input" type="email" name="profileEmail" value="pochta@yandex.ru" />
          </fieldset>
          <div className="profile__footer">
            <button className="profile__edit-btn" type="button">Редактировать</button>
            <Link className="profile__exit-btn" to="/signin">
               Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;