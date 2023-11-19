import Header from "./components/Header/Header";
import MoviesSection from "./components/MoviesSection/MoviesSection";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Favourites from "./components/Favourites/Favourites";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
      <>
        <Header/>
        <MoviesSection/>
        <Favourites/>
        <Subscribe/>
        <SocialLinks/>
        <Footer/>

      </>
  );
}

export default App;
