import styled from "styled-components";
import Heading from "./Heading";
import Customer1 from "../img/customer-7.svg";
import Customer2 from "../img/customer-6.svg";
import Customer3 from "../img/customer-10.svg";
import Cus from "../img/story-customers/customer-1.jpg";
import Hannah from "../img/story-customers/hannah.jpg";
import Sk from "../img/story-customers/sk.jpg";
import Steve from "../img/story-customers/steve.jpg";

const StyledTestimonial = styled.div`
  background-color: var(--color-white);
`;
const Container = styled.div`
  /* border: 2px solid red; */
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 0 4.8rem 18rem;
  @media (max-width: 800px) {
    padding: 0 2rem 18rem;
    gap: 1rem;

    /* background-color: var(--colot-pink-soft-bg); */
  }
  @media (max-width: 600px) {
    padding: 0 2rem 8rem;
  }
`;
const Stories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;

  @media (max-width: 800px) {
    background-color: var(--colot-pink-soft-bg);
    padding: 2rem;
  }
  /* border: 1px solid red; */
`;
const Story = styled.div`
  border: 0.2px solid rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-columns: min-content 1fr;
  max-width: 48rem;
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 800px) {
    background-color: var(--color-white);
    border: none;
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: 100rem;
    border: 0.2px solid rgba(0, 0, 0, 0.2);
  }
`;
const ImgContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100rem;
  background-color: var(--color-white);

  grid-row: 1 / span 2;
`;
const Message = styled.p``;
const Name = styled.p`
  text-align: left;
  text-align: right;
  font-weight: 600;
`;
const Gallary = styled.div`
  /* display: flex; */
  gap: 1rem;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
function Testimonial() {
  return (
    <StyledTestimonial>
      <Container>
        <Heading as="h2">Our Happy Customers</Heading>
        <Stories>
          <Story>
            <ImgContainer>
              <img src={Sk} alt="" />
            </ImgContainer>
            <Message>
              “Excellent flowers! I&apos;ve been a regular customer here for
              years, and I&apos;ve never been disappointed.”
            </Message>
            <Name>-Sukhontharat W.</Name>
          </Story>
          <Story>
            <ImgContainer>
              <img src={Steve} alt="" />
            </ImgContainer>
            <Message>
              “The staff here are incredibly friendly and knowledgeable, helping
              me pick out the perfect bouquet.”
            </Message>
            <Name>-Steve M.</Name>
          </Story>
          <Story>
            <ImgContainer>
              <img src={Hannah} alt="" />
            </ImgContainer>
            <Message>
              “The flower combinations at this shop are both creative and
              elegant. Every bouquet feels like a work of art.”
            </Message>
            <Name>-Hannah S.</Name>
          </Story>
          <Story>
            <ImgContainer>
              <img src={Cus} alt="" />
            </ImgContainer>
            <Message>
              “Top-notch service! The staff goes above and beyond to fulfill
              special requests.”
            </Message>
            <Name>-Jennifer L.</Name>
          </Story>
        </Stories>
        <Gallary>
          <img src={Customer1} alt="" />
          <img src={Customer2} alt="" />
          <img src={Customer3} alt="" />
        </Gallary>
      </Container>
    </StyledTestimonial>
  );
}

export default Testimonial;
