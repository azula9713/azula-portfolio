import React from "react";
import styled from "styled-components";

export default function IntroTitle({ title, number }) {
  return (
    <IntroTitleContainer>
      <Title>
        <IntroNumber>{number}. </IntroNumber>
        <TitleText>{title}</TitleText>
      </Title>
      <DecoLine />
    </IntroTitleContainer>
  );
}

const IntroTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: max-content;
  margin-right: 1rem;
`;

const TitleText = styled.h1`
  color: #f0f0f0;
  width: max-content;
`;

const IntroNumber = styled.span`
  color: #64ffda;
  font-family: "Fira Code";
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const DecoLine = styled.div`
  width: 60%;
  height: 1.5px;
  background: darkGray;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    width: 40%;
  }
`;
