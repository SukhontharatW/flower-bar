import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
--color-pink-main :#FE86AA;
--color-pink-secondary : #FFC4D6;
--color-pink-tertiary : #F2E1E1;

--colot-pink-soft-bg: #fff1f2;

--color-gray-main: #545050;
--color-gray-secondary: #A0A0A0;

--color-black:#000000;
--color-white:#ffffff;

/* --backdrop-color: rgba(0, 0, 0, 0.1);  */
--backdrop-color-main: rgba(0, 0, 0, 0.2); 
--backdrop-color-secondary : rgba(70, 2, 22, 0.25);
--border-radius-sm: 2px;
--border-radius-hg: 100px;


}
*,
*::after,
*::before{
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;
}

html{
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body{
  font-family: "Josefin Slab", sans-serif;
  min-height: 100vh;
  line-height: 1.5;
  font-size:1.6rem;
  color: var(--color-gray-main);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

/**********************************/
/* BELOW 1200px (Landscape Tablets) */
/**********************************/
@media (max-width: 75em) {
  html {
    font-size: 60%;
  }
}
/**********************************/
/* BELOW 944px (Tablets) */
/**********************************/
@media (max-width: 59em) {
  html {
    font-size: 56%;
  }
}

/**********************************/
/* BELOW 704px (Smaller tablets) */
/**********************************/
@media (max-width: 44em) {
}

  `;

export default GlobalStyles;
