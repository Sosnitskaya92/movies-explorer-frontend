import React from "react";
import { useHistory } from "react-router-dom";

function NotFoundPage() {
  let history = useHistory();

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <span className="not-found__caption">Страница не найдена</span>
        <button className="not-found__back-btn" onClick={history.goBack}>Назад</button>
      </div>
    </section>
  );
}

export default NotFoundPage;