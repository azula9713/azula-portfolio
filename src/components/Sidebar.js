import React from "react";
import styled from "styled-components";
import SocialMedia from "./Utility/SocialMedia";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SocialMedia />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  left: 0;
  bottom: 0;
  width: 100px;
  position: fixed;
  margin: 60px 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;
