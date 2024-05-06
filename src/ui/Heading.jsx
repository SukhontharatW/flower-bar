import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-family: "Cinzel", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4.8rem;
      letter-spacing: 1rem;
      color: var(--color-white);
      @media (max-width: 330px) {
        letter-spacing: 0.8rem;
        font-size: 3rem;
      }
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 4rem;
      color: var(--color-pink-main);
      @media (max-width: 330px) {
        font-size: 2.8rem;
      }
    `}  
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      letter-spacing: 0.5rem;
      color: var(--color-white);
      @media (max-width: 330px) {
        letter-spacing: 0.1rem;
        font-size: 1.6rem;
      }
    `}  
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.8rem;
      color: var(--color-pink-main);
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1.6rem;
      color: var(--color-gray-main);
      letter-spacing: 0.5rem;
    `}

  line-height: 1.4;
`;
export default Heading;
