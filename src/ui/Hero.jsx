import styled from "styled-components";
import HeroImg from "../img/hero.png";
import Heading from "./Heading";
const StyledHero = styled.div`
  background-image: linear-gradient(
      var(--backdrop-color-main),
      var(--backdrop-color-main)
    ),
    url(${HeroImg});

  min-height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
`;
function Hero() {
  return (
    <StyledHero>
      <Container>
        <Heading as="h3">Your favorite flower shop in Bangkok</Heading>
        <Heading as="h1">Fresh Flower for Every Occasion</Heading>
        <Heading as="h3">Open daily : 7AM - 7PM</Heading>
      </Container>
    </StyledHero>
  );
}

export default Hero;
