import styled from 'styled-components';

interface PriceCardPropsI {}

export const PriceCardWrapper = styled.div`
  display: flex;

  justify-content: center;
  @media only screen and (max-width: 768px) {
    max-width: 50rem;
  }
  @media only screen and (max-width: 468px) {
    flex-wrap: wrap;
  }
`;

export const PriceCardBox = styled.div`
  margin: 1rem;
  h2 {
    border-bottom: 1px solid #ccc;
    color: black;
  }
  padding: 1rem;
  background-color: var(--primary-white);
  border: 1px solid var(--primary-white);
  border-radius: 0.5rem;
  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;
