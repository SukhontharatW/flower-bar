import styled from "styled-components";
import Heading from "./Heading";

import {
  MdOutlineMapsHomeWork,
  MdOutlineMarkEmailUnread,
  MdOutlineSettingsPhone,
} from "react-icons/md";

const StyledContact = styled.div`
  background-color: var(--color-white);
  padding: 5rem 0 3rem;
`;
const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 4.8rem;

  @media (max-width: 700px) {
    padding: 0 2rem;
  }
`;
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 5.2rem;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-pink-tertiary);
  }
`;
const Item = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
`;
const Icon = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: var(--color-pink-tertiary);

  border-radius: 100rem;
  display: flex;
  font-size: 2.8rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    background-color: var(--color-white);
  }
  @media (max-width: 500px) {
    width: 4rem;
    height: 4rem;
    font-size: 2.4rem;
  }
`;
const TextBox = styled.div`
  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`;
const Title = styled.div`
  font-weight: 700;
`;
function Contact() {
  return (
    <StyledContact id="contact">
      <Container>
        <Heading as="h2">Contact</Heading>
        <Items>
          <Item>
            <Icon>
              <MdOutlineMarkEmailUnread />
            </Icon>
            <TextBox>
              <Title>Email</Title>
              <p>Send us as email today!</p>
              <p>hello@flowerbar.com</p>
            </TextBox>
          </Item>
          <Item>
            <Icon>
              <MdOutlineSettingsPhone />
            </Icon>
            <TextBox>
              <Title>Phone</Title>
              <p>Give us a call anytime!</p>
              <p>+1 (666) 666-4567</p>
            </TextBox>
          </Item>
          <Item>
            <Icon>
              <MdOutlineMapsHomeWork />
            </Icon>
            <TextBox>
              <Title>Address</Title>
              <p>123 Flower St, Bangkok,</p>
              <p>Thailand, 54321</p>
            </TextBox>
          </Item>
        </Items>
      </Container>
    </StyledContact>
  );
}

export default Contact;
