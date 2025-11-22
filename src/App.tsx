import { useState } from "react";
import "./assets/styles/App.css";
import { MainContainer } from "./components/layout/MainContainer/MainContainer";
import { ProfilePic } from "./components/ui-components/profilepic";
import { Title } from "./components/ui-components/title";
import { Description } from "./components/ui-components/description";
import { TextContainer } from "./components/layout/TextContainer";

function App() {
  return (
    <>
      <MainContainer>
        <ProfilePic></ProfilePic>

        <TextContainer>
          <Title></Title>
          <Description></Description>
        </TextContainer>
      </MainContainer>
    </>
  );
}

export default App;
