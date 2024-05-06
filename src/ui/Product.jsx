import styled from "styled-components";
import Heading from "./Heading";
import BestSeller1 from "../img/best-seller-1.svg";
import BestSeller2 from "../img/best-seller-2.svg";
import BestSeller3 from "../img/best-seller-3.svg";

const StyledProduct = styled.div`
  background-color: var(--color-white);

  padding: 0 4.8rem 18rem;
  @media (max-width: 600px) {
    padding: 0 2rem 10rem;
  }
`;
const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  @media (max-width: 800px) {
    padding: 0 2rem 0rem;
  }
  @media (max-width: 600px) {
    gap: 4rem;
  }
`;
const Items = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media (max-width: 800px) {
    grid-template-columns: none;
    gap: 1rem;
    background-color: var(--colot-pink-soft-bg);
    border-radius: 0.5rem;
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;
const SeeMore = styled.a`
  /* text-decoration: none; */
  color: var(--color-pink-main);
`;
function Product() {
  return (
    <StyledProduct id="product">
      <Container>
        <Heading as="h2">Best Sellers</Heading>
        <Items>
          <Item>
            <img src={BestSeller1} alt="" />
            <p>Red Tulips</p>
            <p>2300฿</p>
          </Item>
          <Item>
            <img src={BestSeller2} alt="" />

            <p>Pink Peonies</p>
            <p>1800฿</p>
          </Item>
          <Item>
            <img src={BestSeller3} alt="" />

            <p>White Roses & Friends</p>
            <p>2000฿</p>
          </Item>
        </Items>
        <SeeMore href="#">
          <Heading as="h4">See All</Heading>
        </SeeMore>
      </Container>
    </StyledProduct>
  );
}

export default Product;
