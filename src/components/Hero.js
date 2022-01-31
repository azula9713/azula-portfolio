import styled from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";

export default function Hero() {
  function scrollToAbout() {
    //add offset to scroll to about section
    const about = document.getElementById("about");
    const offset = about.offsetTop - 100;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }

  return (
    <HeroContainer id="home">
      <IntroText>
        <TypeWriterEffect
          textStyle={{ fontFamily: "Courier New", fontSize: "1.5rem" }}
          startDelay={100}
          cursorColor="#64ffda"
          text="Hi my name is"
          typeSpeed={100}
        />
      </IntroText>
      <Name>Nilesh Viduranga.</Name>
      <TagLine>I do stuff related to web.</TagLine>
      <Paragraph>
        I’m a front-end developer engaged in creating (and occasionally
        designing and little bit of back-end developing) amazing web spaces.
        Currently, I’m focused on utilizing my skills to create websites with
        better user experience.
      </Paragraph>
      <CTA onClick={scrollToAbout}>Let's get to know!</CTA>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  padding: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 140px 0px;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const IntroText = styled.label`
  font-family: "Fira Code";
  font-size: 1.5rem;
  color: #64ffda;
  letter-spacing: 0rem;
  margin-bottom: 1rem;
`;

const Name = styled.label`
  color: #f0f0f0;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.7rem;
  }
`;

const TagLine = styled.label`
  color: darkGray;
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Paragraph = styled.p`
  color: gray;
  line-height: 1.5;
  font-size: 1rem;
  letter-spacing: 0.01rem;
  text-align: left;
  margin-bottom: 2rem;
  color: #afafaf;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CTA = styled.button`
  color: #64ffda;
  font-family: "Fira Code";
  font-size: 1rem;
  font-weight: bold;
  background: none;
  text-align: center;
  width: max-content;
  padding: 1rem 2rem;
  border: 1px solid #64ffda;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #64ffda;
    color: #0a192f;
  }
`;
