import styled from "styled-components";
import Heading from "./Heading";
import videoShop from "../img/video.mp4";
const StyledAbout = styled.div`
  background-color: var(--color-white);

  padding: 16rem 0;
  @media (max-width: 600px) {
    padding: 10rem 0;
  }
`;
const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Info = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;
const ShopVideo = styled.div`
  max-width: 75rem;
  max-height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: var(--backdrop-color-secondary);
`;
function About() {
  return (
    <StyledAbout>
      <Container id="about">
        <Heading as="h2">About Us</Heading>
        <Info>
          <p>
            At Flower Bar, we are passionate about delivering moments of joy and
            beauty through our exquisite floral creations. We pride ourselves on
            offering the freshest blooms sourced from local growers and around
            the world.
          </p>
          <p>
            We understand the importance of exceptional service. Our dedicated
            team is here to assist you every step of the way, from selecting the
            perfect flowers to arranging timely delivery to your desired
            location within Bangkok.
          </p>
        </Info>
        <ShopVideo>
          <Overlay />
          <video src={videoShop} autoPlay loop muted></video>
        </ShopVideo>
      </Container>
    </StyledAbout>
  );
}

export default About;
