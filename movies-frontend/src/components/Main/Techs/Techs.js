import React from "react";

function Techs() {
  return (
    <section id="techs" className="techs">
      <div className="container">
        <h2 className="section-title">Технологии</h2>
        <span className="section-line section-line-black"></span>
        <div className="techs__container">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__list">
            <li className="techs__list-item">
              <p className="techs__list-text">HTML</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-text">CSS</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-text">JS</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-text">React</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-text">Git</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-text">Express.js</p>
            </li>
            <li className="techs__list-item">
              <p className="techs__list-text">mongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;