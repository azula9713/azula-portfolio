import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavItems from "../data/NavItems";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      {/* logo */}
      <LogoContainer>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
        >
          <Logo src="/Nilesh.png" alt="logo" />
        </Link>
      </LogoContainer>
      {/* Items */}
      <ItemsContainer>
        {NavItems.map((item) => (
          <Link
            to={item.id}
            key={item.id}
            spy={true}
            smooth={true}
            offset={-100}
          >
            <Item>
              #<ItemName>{item.name}</ItemName>
            </Item>
          </Link>
        ))}
      </ItemsContainer>
      <HeaderMobileWrapper>
        <MenuAction>
          <CustomMenu
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <IconSmall icon={faBars} />
          </CustomMenu>
        </MenuAction>
        <BurgerNav show={isOpen}>
          <CloseWrapper>
            <CustomClose
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </CustomClose>
          </CloseWrapper>
          {NavItems.map((item) => (
            <Link
              to={item.id}
              key={item.id}
              spy={true}
              smooth={true}
              offset={-100}
            >
              <NavigationItem>
                # <ItemName>{item.name}</ItemName>
              </NavigationItem>
            </Link>
          ))}
        </BurgerNav>
      </HeaderMobileWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 9999;
  background-color: #0a192f;
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100%;
  margin: 1rem 2rem;

  @media (max-width: 768px) {
    margin: 0.5rem 1rem;
  }
`;

const Logo = styled.img`
  width: 100%;
  padding: 1rem;
`;

const IconSmall = styled(FontAwesomeIcon)`
  color: #64ffda;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 968px) {
    display: none;
  }
`;

const Item = styled.label`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  color: #64ffda;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const ItemName = styled.span`
  color: white;
  font-family: "Fira Code";

  &:hover {
    color: #64ffda;
    text-decoration: underline;
  }
`;

const HeaderMobileWrapper = styled.div`
  display: none;
  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
  }
`;

const MenuAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  a {
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled.button`
  color: #000000;
  background: transparent;
  border: none;
  width: 40px;
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #233554;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
`;

const CustomClose = styled(CustomMenu)`
  svg {
    color: #64ffda;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavigationItem = styled.li`
  list-style: none;
  color: #64ffda;
  margin: 0px 50px;
  padding: 15px 0;
  font-weight: 600;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    color: #64ffda;
    transition: all 0.3s ease-in-out;
    transform: translateY(-3px);
  }
`;
