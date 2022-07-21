import React from "react";
import Promo from "../Main/Promo/Promo";
import AboutProject from "../Main/AboutProject/AboutProject";
import Techs from "../Main/Techs/Techs";
import AboutMe from "../Main/AboutMe/AboutMe";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default Main;