import { useState } from "react";
import "./assets/styles/App.css";
import { MainContainer } from "./components/layout/MainContainer/MainContainer";
import { ProfilePic } from "./components/ui-components/profilepic";

function App() {
  return (
    <>
      <MainContainer>
        <ProfilePic></ProfilePic>
      </MainContainer>
    </>
  );
}

export default App;
