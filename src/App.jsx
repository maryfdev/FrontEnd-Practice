import { styled } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import {css} from "styled-components";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;  
`
const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0, 65% 0, 49% 100%, 100% 100%);
  background-color: #F7BDBB;
`

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 49% 0%, 35% 100%, 0% 100%);
  background-color: #f21642;
`

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 35% 0, 35% 100%, 0% 100%);
  background-color: #fed819;
`

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(35% 0, 100% 0, 100% 100%, 65% 100%);
  background-color: #f21642;
`

const App = () =>{
  
  const SmallScreen = window.screen.width <= 480 ? true : false;
  
  return (
    <>
      <Container>
        <Navbar/>
        <Intro/>
        <IntroShape></IntroShape>
      </Container>
      <Container>
        <Features></Features>
        <FeatureShape></FeatureShape>
      </Container>
      <Container>
        <Service/>
        {!SmallScreen && <ServiceShape></ServiceShape>}
      </Container>
      <Container>
        <Price/>
        <PriceShape></PriceShape>
      </Container>
      <Container>
        <Contact/>
        <Footer/>
      </Container>
    </>
  );
};

export default App;
