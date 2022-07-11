import React from "react";
import logo from "../../../images/landing-logo.svg"


function Promo() {
  return(
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__image" src={logo} alt="декоративный фоновый элемент" />
      </div>
    </section>
  )
}

export default Promo;