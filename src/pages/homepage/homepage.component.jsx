import React from "react";
//import './homepage.style.scss'
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";
import { HomePageContainer } from "./homepage.style";

const HomePage = () => {
  return (
    <HomePageContainer>
      <DirectoryMenu />
    </HomePageContainer>
  );
};

export default HomePage;
