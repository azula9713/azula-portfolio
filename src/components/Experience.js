import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tooltip from "react-simple-tooltip";
import { css } from "styled-components";

import IntroTitle from "./Utility/IntroTitle";
import WokrPlaces from "../data/WorkPlaces";
import TechIcons from "../data/Icons";

export default function Experience() {
  const [selectedTab, setSelectedTab] = useState("tab-1");
  const [selectedWorkPlace, setSelectedWorkPlace] = useState({});

  useEffect(() => {
    if (selectedTab !== "" || selectedTab !== null) {
      setSelectedWorkPlace(
        WokrPlaces.find((workPlace) => workPlace.tabId === selectedTab)
      );
    }
  }, [selectedTab]);

  return (
    <ExperienceContainer id="experience">
      <IntroTitle title="Where I've Worked" number="02" />
      <WorkPlaceList>
        <Places>
          {WokrPlaces.map((place) => (
            <WorkPlace
              key={place.id}
              selected={selectedTab}
              id={place.tabId}
              onClick={() => {
                setSelectedTab(place.tabId);
              }}
            >
              {place.name}
            </WorkPlace>
          ))}
        </Places>
        <Works>
          {selectedWorkPlace.id !== "" && (
            <WorkPlaceDetails>
              <PostTitle>
                {selectedWorkPlace.position}{" "}
                <CompnayName>@ {selectedWorkPlace.name}</CompnayName>
              </PostTitle>
              <WorkDuration>{selectedWorkPlace.date}</WorkDuration>

              {selectedWorkPlace.tasks?.map((task) => (
                <Task key={task.id}>{task.name}</Task>
              ))}
              <TechStack>
                {selectedWorkPlace.techStack?.map((tech, i) => (
                  <Tech key={i}>
                    <Tooltip
                      content={tech.name}
                      color="#64ffda"
                      customCss={css`
                        white-space: nowrap;
                      `}
                    >
                      <TechIcon
                        data-tip={tech.name}
                        src={
                          TechIcons.find((icon) => icon?.code === tech?.code)
                            ?.icon
                        }
                        alt={tech.code}
                        width="30px"
                      />
                    </Tooltip>
                  </Tech>
                ))}
              </TechStack>
            </WorkPlaceDetails>
          )}
        </Works>
      </WorkPlaceList>
    </ExperienceContainer>
  );
}

const ExperienceContainer = styled.section`
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

const WorkPlaceList = styled.div`
  border-left: 1px solid #fefefe;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    border-left: none;
  }
`;

const Places = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: start;
    overflow-x: scroll;
    white-space: nowrap;
    max-width: 340px;
  }
`;

const Works = styled.div`
  padding: 10px;
`;

const WorkPlace = styled.div`
  padding: 10px;
  color: ${(props) => (props.selected === props.id ? "#64ffda" : "#fefefe")};
  cursor: pointer;
  font-family: "Fira Code";
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  border-left: ${(props) =>
    props.selected === props.id ? "2px solid #64ffda" : "none"};

  @media (max-width: 768px) {
    border-right: 1px solid #fefefe;
    border-left: none;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
      props.selected === props.id ? "#233554" : "none"};
    border-bottom: ${(props) =>
      props.selected === props.id ? "2px solid #64ffda" : "none"};

    &:last-child {
      border-right: none;
    }
  }
`;

const WorkPlaceDetails = styled.div`
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const PostTitle = styled.p`
  margin-right: 0.5rem;
  color: #fefefe;
  font-weight: bold;
`;

const WorkDuration = styled.p`
  //add calendar icon before date
  &:before {
    content: "📅";
    margin-right: 0.5rem;
    color: #fefefe;
  }

  color: #fefefe;
  font-family: "Fira Code";
  font-size: 0.8rem;
`;

const CompnayName = styled.span`
  color: #64ffda;
`;

const Task = styled.p`
  &::before {
    content: "▹";
    color: #64ffda;
    margin-right: 0.5rem;
  }

  margin-left: 0.5rem;
  color: #fefefe;
`;

const TechStack = styled.div`
  //6 icons per row in grid

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.5rem;
  margin-top: 0.5rem;
  color: #fefefe;
  font-family: "Fira Code";
  font-size: 0.8rem;
  border-radius: 5px;
  //make items center aligned
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Tech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #233554;
  border-radius: 5px;
  color: #fefefe;
  width: 30px;
  height: 30px;
  /* border: 1px solid #64ffda; */
`;

const TechIcon = styled.img``;
