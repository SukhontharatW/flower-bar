import styled from "styled-components";
import ImgLogo from "../public/Logo-black-soft-pink.png";

import { FaFacebookSquare, FaInstagramSquare, FaLine } from "react-icons/fa";

const StyledFooter = styled.footer`
  background-color: var(--color-pink-tertiary);
  padding: 6.2rem 2rem;
`;
const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding-top: 6rem;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;

  max-width: 150rem;
  margin: 0 auto;
  padding: 0.6rem 1.2rem;
  display: flex;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-gray-secondary);
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0.6rem;
  font-size: 2.8rem;
  @media (max-width: 800px) {
    font-size: 2.4rem;
  }
`;
const Line = styled.div`
  background-color: var(--color-gray-secondary);
  padding: 0.2px 0;
  margin: 1rem 0;
`;
const Policy = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 1.6rem;
  & a {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 330px) {
    gap: 0.2rem;
    justify-content: center;
  }
`;
const LastInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 16rem;
    @media (max-width: 800px) {
      width: 14rem;
    }
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div>
          <Logo href="#">
            <img src={ImgLogo} alt="logo" />
          </Logo>
          <Social>
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaLine />
          </Social>
        </div>
        <Line />
        <LastInfo>
          <div>
            <p>Copyright &copy; 2024 Sukhontharat W. All rights reserved.</p>
          </div>

          <Policy>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Term of Service</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </Policy>
        </LastInfo>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
