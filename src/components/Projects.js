import React from "react";
import styled from "styled-components";
import ProjectList from "../data/ProjectList";
import IntroTitle from "./Utility/IntroTitle";
import ProjectCard from "./Utility/ProjectCard";

export default function Projects() {
  return (
    <ProjectContainer id="projects">
      <IntroTitle title="Some stuff I've made" number="03" />
      <ProjectsWrapper>
        {ProjectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsWrapper>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  overflow: hidden;
  padding: 10px 24px;
  margin: 200px 0;
  /* height: calc(100vh - 240px); */

  @media (max-width: 768px) {
    padding: 8px;
    align-items: center;
    justify-content: center;
    margin: 100px 0;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
