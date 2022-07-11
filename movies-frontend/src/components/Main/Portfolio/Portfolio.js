import React from "react";
import linkIcon from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
          <li className='portfolio__border'><a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/Sosnitskaya92/how-to-learn">Статичный сайт<img className="portfolio__icon" src={linkIcon} alt="иконка для перехода по ссылке"/></a></li>
          <li className='portfolio__border'><a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/Sosnitskaya92/russian-travel">Адаптивный сайт<img className="portfolio__icon" src={linkIcon} alt="иконка для перехода по ссылке"/></a></li>
          <li className='portfolio__border'><a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/Sosnitskaya92/express-mesto-gha">Одностраничное приложение<img className="portfolio__icon" src={linkIcon} alt="иконка для перехода по ссылке"/></a></li>
        </ul>
    </div>
  );
}

export default Portfolio;