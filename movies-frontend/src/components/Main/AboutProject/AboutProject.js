import React from "react";

function AboutProject() {
  
  return (
    <section id="about-project" className="about-project">
      <div className="container">
        <h2 className="section-title">О проекте</h2>
        <span className="section-line"></span>
        <ul className="about-project__list">
          <li className="about-project__list-item">
            <h3 className="about-project__list-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__list-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about-project__list-item">
            <h3 className="about-project__list-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__list-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <ul className="about-project__diagramm">
          <li className="about-project__diagramm-item">
            <p className="about-project__diagramm-time about-project__diagramm-time_bg-color_green">1 неделя</p>
            <p className="about-project__diagramm-caption">Back-end</p>
          </li>
          <li className="about-project__diagramm-item">
            <p className="about-project__diagramm-time about-project__diagramm-time_bg-color_grey about-project__diagramm-time_text-color_white">4 недели</p>
            <p className="about-project__diagramm-caption">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;