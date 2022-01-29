import React from "react";
import styled from "styled-components";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import maximizeMinimize2 from "react-useanimations/lib/maximizeMinimize2";

export default function ProjectCard({ project }) {
  return (
    <ProjectCardContainer>
      {project?.display === "LTR" && (
        <ProjectWrapperLTR>
          <ProjectImageContainerLTR>
            <ProjectImage src={project.image} alt={project.name} />
          </ProjectImageContainerLTR>
          <ProjectInfoLTR>
            <TitleInfo mode={project.display}>
              <Type mode={project.display}>{project.type}</Type>
              <Title mode={project.display}>{project.name}</Title>
            </TitleInfo>
            <DescriptionBox mode={project.display}>
              <Description mode={project.display}>
                {project.description}
              </Description>
            </DescriptionBox>

            <LinkInfo mode={project.display}>
              <GitLink href={project.github} target="_blank">
                <UseAnimations
                  animation={github}
                  size={40}
                  autoPlay={true}
                  loop={true}
                  strokeColor="white"
                />
              </GitLink>
              <Link href={project.link} target="_blank">
                <UseAnimations
                  animation={maximizeMinimize2}
                  size={40}
                  strokeColor="white"
                />
              </Link>
            </LinkInfo>
          </ProjectInfoLTR>
        </ProjectWrapperLTR>
      )}
      {project?.display === "RTL" && (
        <ProjectWrapperRTL>
          <ProjectInfoRTL>
            <TitleInfo mode={project.display}>
              <Type mode={project.display}>{project.type}</Type>
              <Title mode={project.display}>{project.name}</Title>
            </TitleInfo>
            <DescriptionBox mode={project.display}>
              <Description mode={project.display}>
                {project.description}
              </Description>
            </DescriptionBox>
            <LinkInfo mode={project.display}>
              <GitLink href={project.github} target="_blank">
                <UseAnimations
                  animation={github}
                  size={40}
                  autoPlay={true}
                  loop={true}
                  strokeColor="white"
                />
              </GitLink>
              <Link href={project.link} target="_blank">
                <UseAnimations
                  animation={maximizeMinimize2}
                  size={40}
                  strokeColor="white"
                />
              </Link>
            </LinkInfo>
          </ProjectInfoRTL>
          <ProjectImageContainerRTL>
            <ProjectImage src={project.image} alt={project.name} />
          </ProjectImageContainerRTL>
        </ProjectWrapperRTL>
      )}
      {/* Finish Mobile */}
    </ProjectCardContainer>
  );
}

const ProjectCardContainer = styled.div`
  padding: 10px;
  margin: 20px 10px;
`;

const ProjectWrapperLTR = styled.div`
  display: grid;
  position: relative;
  gap: 10px;
  max-width: 1000px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProjectWrapperRTL = styled(ProjectWrapperLTR)``;

const ProjectImageContainerLTR = styled.div`
  grid-column: 7 / -1;
  text-align: right;
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
`;

const ProjectImageContainerRTL = styled.div`
  grid-column: 1 / 8;
  grid-area: 1 / 5 / -1 / -1;
  position: relative;
  text-align: left;
`;

const ProjectInfoLTR = styled.div`
  grid-column: 1 / 8;
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;
  justify-self: end;
`;

const ProjectInfoRTL = styled.div`
  grid-column: 7 / -1;
  z-index: 1;
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
`;

const ProjectImage = styled.img`
  max-width: 700px;

  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.mode === "LTR" ? "flex-end" : "flex-start")};
  justify-content: center;
`;

const Type = styled.label`
  color: #64ffda;
  font-family: "Fira Code";
  font-size: 1rem;
  font-weight: bold;
  text-align: ${(props) => (props.mode === "LTR" ? "right" : "left")};
`;

const Title = styled.h4`
  color: #fafafa;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 10px 0;
  padding: 0;
  text-align: ${(props) => (props.mode === "LTR" ? "right" : "left")};
`;

const DescriptionBox = styled.div`
  background-color: #233554;
  padding: 5px 10px;
  border-radius: 5px;
  max-width: 400px;
`;

const Description = styled.p`
  text-align: ${(props) => (props.mode === "LTR" ? "right" : "left")};
  color: #fafafa;
  padding: 0px 5px;
  line-height: 1.5;
  font-size: 0.9rem;
`;

const LinkInfo = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.mode === "LTR" ? "flex-end" : "flex-start"};
  align-items: center;
  margin: 10px 0;
`;

const GitLink = styled.a`
  padding: 5px 10px;
`;

const Link = styled(GitLink)``;
