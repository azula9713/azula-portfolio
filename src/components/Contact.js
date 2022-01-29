import React from "react";
import styled from "styled-components";
import IntroTitle from "./Utility/IntroTitle";

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <IntroTitle title="Let's Talk!" number="04" />
      <BigText>Get in touch</BigText>
      <Paragraph>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </Paragraph>
      <CTA href="mailto:nnviduranga@gmail.com">Say hello</CTA>
    </ContactContainer>
  );
}

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 10px 24px;
  margin-top: 100px;
  /* height: calc(100vh - 240px); */

  @media (max-width: 768px) {
    padding: 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 200px;
  }
`;

const BigText = styled.label`
  color: #f0f0f0;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.7rem;
  }
`;

const Paragraph = styled.p`
  color: gray;
  line-height: 1.5;
  font-size: 1rem;
  letter-spacing: 0.01rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #afafaf;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CTA = styled.a`
  text-decoration: none;
  color: #64ffda;
  border: 1px solid #64ffda;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-family: "Fira Code";
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #64ffda;
    color: #0a192f;
  }
`;
