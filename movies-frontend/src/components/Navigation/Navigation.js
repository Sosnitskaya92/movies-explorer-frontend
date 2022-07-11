import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ isBurgerBtnClicked, onClose }) {
  return (
    <div className={`popup ${isBurgerBtnClicked ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close-btn" onClick={onClose}></button>
        <ul className="popup__menu-list">
          <li className="popup__menu-list-item">
            <NavLink className="popup__menu-list-link"  activeClassName="popup__menu-list-link-active"exact to="/" onClick={onClose}>
              Главная
            </NavLink>
          </li>
          <li className="popup__menu-list-item">
            <NavLink className="popup__menu-list-link"  activeClassName="popup__menu-list-link-active" to="/movies" onClick={onClose}>
              Фильмы
            </NavLink>
          </li>
          <li className="popup__menu-list-item">
            <NavLink className="popup__menu-list-link"  activeClassName="popup__menu-list-link-active" to="/saved-movies" onClick={onClose}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <div className="popup__account-btn-container">
          <NavLink className="popup__account-btn" to="/profile" onClick={onClose}>
            <p className="popup__account-text">Аккаунт</p>
            <div className="popup__icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;