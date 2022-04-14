import React from 'react'
import styled from 'styled-components'

const TechStackContainer = ({project}) => {
  return (
    <TechContainer mode={project.display}>
    {project.tech.map((tech) => (
      <TechItem mode={project.display} key={tech}>
        {tech}
      </TechItem>
    ))}
  </TechContainer>
  )
}

export default TechStackContainer

const TechContainer = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) =>
    props.mode === "LTR" ? "flex-end" : "flex-start"};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TechItem = styled.label`
  &:before {
    //add a bullet
    content: "•";
    display: inline-block;
  }

  color: #64ffda;
  font-family: "Fira Code";
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 5px;
  text-align: ${(props) => (props.mode === "LTR" ? "right" : "left")};
  white-space: nowrap;

  &:last-child {
    margin-right: 0;
  }
`;