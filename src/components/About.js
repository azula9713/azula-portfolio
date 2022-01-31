import React from "react";
import styled from "styled-components";
import IntroTitle from "./Utility/IntroTitle";

import ProfileImage from "../assets/images/profile.jpeg";

export default function About() {
  return (
    <AboutContainer id="about">
      <IntroTitle title="About Me" number="01" />
      <AboutDescription>
        <ParagraphContainer>
          <AboutParagraph>
            Hello! My name is Nilesh and I enjoy creating things that live on
            the internet. My interest in web development started back in 2017
            when during my university studies, I assume that one little project
            taught me a lot about {""}
            <ColoredText>HTML and CSS</ColoredText> .
          </AboutParagraph>
          <AboutParagraph>
            Flash to today, and I’ve had the privilege of working at an{" "}
            <ColoredText>
              advertising agency, a start-up, also a huge corporation, and with
              some amazing clients
            </ColoredText>
            . My main focus these days is building accessible, inclusive
            products and digital experiences at Upstatement for a variety of
            clients.
          </AboutParagraph>
          <AboutParagraph>
            Here are a few <ColoredText>technologies</ColoredText> I’ve been
            working with recently:
          </AboutParagraph>
          <TechStack>
            <SkillList>
              <Skill> Javascript</Skill>
              <Skill> Typescript</Skill>
              <Skill> React</Skill>
              <Skill> Svelte</Skill>
              <Skill> Recoil</Skill>
              <Skill> Tailwind CSS</Skill>
              <Skill> Node.js</Skill>
              <Skill> Mongo DB</Skill>
            </SkillList>
          </TechStack>
        </ParagraphContainer>
        <ImageBorder>
          <ImageContainer>
            <Image src={ProfileImage} alt="me" width={100} />
          </ImageContainer>
        </ImageBorder>
      </AboutDescription>
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  overflow: hidden;
`;

const AboutDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ColoredText = styled.span`
  color: #64ffda;
`;

const ParagraphContainer = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageBorder = styled.div`
  padding: 1rem;
  border: 1px solid #64ffda;
  width: 300px;
  height: 300px;
`;

const ImageContainer = styled.div`
  position: relative;
  display: block;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in-out;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

const AboutParagraph = styled.p`
  color: gray;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: left;
`;

const TechStack = styled.div`
  margin: 2rem 0rem;
`;

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
`;

const Skill = styled.li`
  list-style-type: none;
  font-size: 1rem;
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  color: #cdcdcd;
  font-family: "Fira Code";
  font-weight: bold;

  &:before {
    content: "▹";
    color: #64ffda;
    position: absolute;
    line-height: 12px;
    left: 0;
    font-size: 1.2rem;
  }
`;
