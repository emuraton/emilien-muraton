import styled from 'styled-components';

//TODO remove it later
export const Container = styled.section`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(transparent 90%, #663399 0);
  color: black;
`;
export const MarginWrapper = styled.div`
  margin: 4% 10% 0 10%;
`;

export const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 1.8rem;
`;

export const Description = styled.p`
  max-width: 800px;
  font-size: 1.6rem;
  font-weight: 300;
  margin: 0 0 1.5rem 0;
`;

export const EiffelTowerWrapper = styled.div`
  position: fixed;
  bottom: 32%;
  right: 10%;
`;
