import React from "react";
import styled from "styled-components";
import {
  FiGithub,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

export default function SocialMedia() {
  const style = {
    fontSize: "1.5rem",
  };

  return (
    <SocialMediaContainer>
      <SocialLink href="https://github.com/azula9713" target="_blank">
        <FiGithub style={style} />
      </SocialLink>
      <SocialLink href="https://twitter.com/AzuLa9713" target="_blank">
        <FiTwitter style={style} />
      </SocialLink>
      <SocialLink
        href="https://www.facebook.com/nilesh.viduranga.3"
        target="_blank"
      >
        <FiFacebook style={style} />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/az_u_la_9713" target="_blank">
        <FiInstagram style={style} />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/nilesh-viduranga"
        target="_blank"
      >
        <FiLinkedin style={style} />
      </SocialLink>
    </SocialMediaContainer>
  );
}

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const SocialLink = styled.a`
  margin: 20px 10px;
  transition: all 0.3s ease-in-out;
  color: lightGray;

  @media (max-width: 768px) {
    margin: 10px;
  }

  &:hover {
    color: #64ffda;
  }
`;
