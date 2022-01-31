import React from "react";
import styled from "styled-components";
import SocialMedia from "./Utility/SocialMedia";

export default function Footer() {
  return (
    <FooterContainer>
      <DesignText>Designed & Built by Nilesh Viduranga</DesignText>
      <SMContainer>
        {" "}
        <SocialMedia />
      </SMContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 40px;
`;

const DesignText = styled.p`
  color: lightGray;
  font-size: 0.8rem;
  font-family: "Fira Code";
  text-align: center;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #64ffda;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const SMContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
