// /* eslint-disable no-unused-vars */
import styled from "styled-components";
import ImgLogo from "../public/Logo-black-soft-pink.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const StyledNavBar = styled.div`
  background-color: var(--color-white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: 0.6px solid var(--color-pink-tertiary);
  /* box-shadow: 0 0 1rem rgba(242, 225, 225, 0.7); */
`;

const Container = styled.div`
  max-width: 150rem;
  margin: 0 auto;
  padding: 0.6rem 1.2rem 0.6rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
  img {
    height: 100%;
    width: auto;
    @media (max-width: 800px) {
      width: 70%;
    }
  }
`;
const MainNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainNav = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  list-style: none;

  li {
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-0.5rem);
    }
    &:active {
      transform: translateY(-0.1rem);
    }
  }
  & a {
    text-decoration: none;
    font-size: 1.6rem;
    letter-spacing: 0.05rem;
    color: var(--color-gray-main);
    font-weight: 600;
    &:hover,
    &:active {
      color: var(--color-black);
    }
  }
  @media (max-width: 900px) {
    background-color: var(--color-white);
    position: fixed;
    /* top: -100vh; */
    top: ${({ open }) => (open ? "0" : "-100vh")};
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    transition: 0.6s;
  }
`;

const SyledNavIconBar = styled.div`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: $color-primary;
  font-size: 2.2rem;
  display: flex;

  visibility: hidden;
  opacity: 0;
  @media (max-width: 900px) {
    visibility: visible;
    opacity: 1;
  }
`;
const SyledNavIconClose = styled.div`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: $color-primary;
  font-size: 2.2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;

  visibility: hidden;
  opacity: 0;
  @media (max-width: 900px) {
    visibility: visible;
    opacity: 1;
  }
`;

// eslint-disable-next-line no-unused-vars
const NavbarResponsive = styled.ul`
  @media (max-width: 900px) {
    transform: translateY(100vh);
  }
`;
function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <StyledNavBar>
      <Container>
        <Logo href="#">
          <img src={ImgLogo} alt="logo" />
        </Logo>
        <MainNavContainer>
          <MainNav open={open}>
            <li>
              <a onClick={toggleOpen} href="#">
                home
              </a>
            </li>
            <li>
              <a onClick={toggleOpen} href="#about">
                about
              </a>
            </li>
            <li>
              <a onClick={toggleOpen} href="#service1">
                Regular Delivery
              </a>
            </li>
            <li>
              <a onClick={toggleOpen} href="#service2">
                Made To Order
              </a>
            </li>
            <li>
              <a onClick={toggleOpen} href="#product">
                Shop
              </a>
            </li>
            <li>
              <a onClick={toggleOpen} href="#contact">
                Contact
              </a>
            </li>
            <SyledNavIconClose onClick={toggleOpen}>
              <FaTimes />
            </SyledNavIconClose>
          </MainNav>
          <SyledNavIconBar onClick={toggleOpen}>
            <FaBars />
          </SyledNavIconBar>
        </MainNavContainer>
      </Container>
    </StyledNavBar>
  );
}

export default NavBar;
