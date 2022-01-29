import styled from "styled-components";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />

      <DataContainer>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </DataContainer>
    </div>
  );
}

export default App;

const DataContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem;
  background-color: #0a192f;
`;
