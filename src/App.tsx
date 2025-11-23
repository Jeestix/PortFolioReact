import { useState } from "react";
import "./assets/styles/App.css";
import { MainContainer } from "./components/layout/MainContainer/MainContainer";
import { ProfilePic } from "./components/ui-components/profilepic";
import { Title } from "./components/ui-components/title";
import { Description } from "./components/ui-components/description";
import { TextContainer } from "./components/layout/TextContainer";
import { TechContainer } from "./components/layout/TechContainer";
import { Technologie } from "./components/ui-components/technologie/Technologie";
import { Header } from "./components/ui-components/header/Header";
import { ProjectContainer } from "./components/layout/ProjectContainer";
import { Project } from "./components/ui-components/project/Project";
import { getTitle } from "./datamanagment/data";

const maintitle = getTitle();

function App() {
  return (
    <>
      <MainContainer>
        <ProfilePic></ProfilePic>

        <TextContainer>
          <Title>{maintitle}</Title>
          <Description></Description>
        </TextContainer>

        <TechContainer>
          <Header>TECHNOLOGIES</Header>
          <Technologie></Technologie>
        </TechContainer>

        <ProjectContainer>
          <Header>PROJECTS</Header>
          <Project></Project>
        </ProjectContainer>
      </MainContainer>
    </>
  );
}

export default App;
