import styled from "styled-components";
import Heading from "./Heading";
import ImgService1 from "../img/service-1.jpeg";
import ImgService2 from "../img/service-2.jpeg";

const StyledService = styled.div`
  background-color: var(--color-white);

  display: flex;
  flex-direction: column;
  gap: 18rem;
  padding: 0 4.8rem 18rem;

  @media (max-width: 800px) {
    grid-template-columns: none;
    padding: 0 2rem 18rem;
  }
  @media (max-width: 600px) {
    padding: 0 2rem 10rem;
  }
`;
const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  /* border: 1px solid red; */
`;
const Services = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 4fr 6fr;
  overflow: hidden;
  /* border: 1px solid red; */
  padding: 2rem;
  gap: 4rem;
  @media (max-width: 800px) {
    grid-template-columns: none;
    gap: 1rem;
    background-color: var(--colot-pink-soft-bg);
    border-radius: 0.5rem;
  }
`;

const ImgService = styled.div`
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const ServiceText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: self-start;

  @media (max-width: 800px) {
    align-items: center;
  }
`;
const Feature = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  margin-top: 1.7rem;
  grid-column-gap: 1.6rem;
  /* grid-template-rows: 2.4rem; */
  padding-right: 8rem;
  @media (max-width: 600px) {
    padding-right: 0rem;
    grid-column-gap: 1rem;
  }
`;
const Description = styled.p`
  padding: 3rem 0;
  /* border: 1px solid red; */
`;
const NumberBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--color-pink-secondary);
  border-radius: 100rem;
  grid-row: 1 / span 2;
  transform: translateY(-0.2rem);
  position: relative;
`;
const Number = styled.p`
  font-weight: 700;
  position: absolute;
  /* position: absolute; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.p`
  font-weight: 700;
  z-index: 1;
`;
const Button = styled.button`
  margin-top: 4.8rem;
  background-color: var(--color-pink-main);

  border: none;
  /* color: var(--color-white); */
  cursor: pointer;

  padding: 0.6rem 2.6rem;
  font-weight: 700;
  text-align: center;
  border-radius: 20px;

  &:hover {
    background-color: var(--color-pink-secondary);
  }
`;

function Service() {
  return (
    <StyledService>
      <Container>
        <Services id="service1">
          <ImgService>
            <img src={ImgService1} alt="" />
          </ImgService>
          <ServiceText>
            <Heading as="h2">Regular Delivery</Heading>
            <Description>
              Join our flower subscription service today and experience the
              convenience and beauty of having gorgeous flowers brightening up
              your life on a regular basis. With our flower subscription, you
              will enjoy:
            </Description>
            <Feature>
              <NumberBox>
                <Number>1</Number>
              </NumberBox>
              <Title>Regular Deliveries</Title>
              <p>
                Receive a curated selection of fresh flowers on a schedule that
                suits you best, whether it&apos;s weekly, bi-weekly, or monthly.
              </p>
            </Feature>
            <Feature>
              <NumberBox>
                <Number>2</Number>
              </NumberBox>
              <Title>Seasonal Selections</Title>
              <p>
                Our expert florists handpick the finest seasonal blooms,
                ensuring that each arrangement is filled with the freshest and
                most vibrant flowers available.
              </p>
            </Feature>
            <Feature>
              <NumberBox>
                <Number>3</Number>
              </NumberBox>
              <Title>Customization Options</Title>
              <p>
                Tailor your subscription to your preferences, from choosing your
                favorite flower types to selecting specific color palettes and
                styles.
              </p>
            </Feature>
            <Feature>
              <NumberBox>
                <Number>4</Number>
              </NumberBox>
              <Title>Flexible Plans</Title>
              <p>
                Choose from our range of subscription plans to find the perfect
                option that fits your budget and floral needs.
              </p>
            </Feature>
            <Button>Subscription Plans</Button>
          </ServiceText>
        </Services>
        <Services id="service2">
          <ImgService>
            <img src={ImgService2} alt="" />
          </ImgService>
          <ServiceText>
            <Heading as="h2">Made To Order</Heading>
            <Description>
              Design your dream bouquet with our Made-to-Order Flower service.
              From weddings to a special simple moment, our skilled florists are
              here to make your floral dreams a reality. Here how it works:
            </Description>
            <Feature>
              <NumberBox>
                <Number>1</Number>
              </NumberBox>
              <Title>Free Consultation</Title>
              <p>
                Our skilled florists will work closely with you to understand
                your preferences, occasion, and any specific requirements you
                may have.
              </p>
            </Feature>
            <Feature>
              <NumberBox>
                <Number>2</Number>
              </NumberBox>
              <Title>Expert Craftsmanship</Title>
              <p>
                With meticulous attention to detail, our skilled florists will
                handcraft your made-to-order arrangement with the utmost care
                and precision.
              </p>
            </Feature>
            <Feature>
              <NumberBox>
                <Number>3</Number>
              </NumberBox>
              <Title>Quality Guarantee</Title>
              <p>
                We source only the freshest and highest quality blooms to ensure
                that your custom creation looks stunning and lasts as long as
                possible.
              </p>
            </Feature>
            <Feature>
              <NumberBox>
                <Number>4</Number>
              </NumberBox>
              <Title>Delivery</Title>
              <p>
                Once your made-to-order flower arrangement is ready, we&apos;ll
                arrange for prompt delivery to your desired location.
              </p>
            </Feature>
            <Button>Start Consulting</Button>
          </ServiceText>
        </Services>
      </Container>
    </StyledService>
  );
}

export default Service;
