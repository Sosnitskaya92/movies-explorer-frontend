import React, { useState } from "react";
import { NavLink, useLocation  } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {

  let location = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  
  const headerClassName = `header ${
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile"
      ? "header_bg-color_black"
      : "header_bg-color_dark-blue"
  }`;

  function handleBurgerBtnClick() {
    setIsClicked(true);
  }

  function closePopup() {
    setIsClicked(false);
  }

  return (
    <header className={headerClassName}>
      {loggedIn ? (
        <>
          <div className="header__container header__container-menu">
          <div className="header__container-left">
            <NavLink to="/" className="header__logo"></NavLink>
            <nav className="header__main-nav">
              <NavLink to="/movies" className="header__nav-movies-link" activeClassName="header__nav-movies-link-active">
                Фильмы
              </NavLink>
              <NavLink to="/saved-movies" className="header__nav-movies-link" activeClassName="header__nav-movies-link-active" >
                Сохранённые фильмы
              </NavLink>
            </nav>
          </div>
            <NavLink to="/profile" className="header__account-btn">
              <p className="header__text">Аккаунт</p>
              <div className="header__icon" />
            </NavLink>
          </div>
          <div className="header__container header__container-burger">
            <NavLink to="/" className="header__logo"></NavLink>
            <button className="header__burger-menu-btn" type="button" onClick={handleBurgerBtnClick}></button>
          </div>
        </>
      ) : (        
        <div className="header__container">
          <NavLink to="/" className="header__logo"></NavLink>
          <nav className="header__auth-nav">
            <NavLink to="signup" className="header__nav-register-btn">
              Регистрация
            </NavLink>
            <NavLink to="signin" className="header__nav-login-btn">
              Войти
            </NavLink>
          </nav>
        </div>
      )}
      <Navigation isBurgerBtnClicked={isClicked} onClose={closePopup} />
    </header>
  );
}

export default Header;