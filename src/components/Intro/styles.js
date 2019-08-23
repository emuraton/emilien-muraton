import styled from 'styled-components';
import { maxSizes } from '../../utils/breakpoints';

export const Container = styled.section`
  height: 100vh;
  background-image: linear-gradient(transparent 90%, #663399 0);
  color: black;
  position: relative;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const MarginWrapper = styled.div`
  margin: 4% 10% 0 10%;
`;

export const Heading = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1.8rem;

  @media ${maxSizes.mobile} {
    margin-top: 25%;
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  max-width: 800px;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0 0 1.5rem 0;
`;

export const EiffelTowerWrapper = styled.div`
  position: absolute;
  bottom: 32%;
  right: 10%;

  @media ${maxSizes.mobile} {
    display: none;
  }
`;
