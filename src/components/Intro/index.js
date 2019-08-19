import React from 'react';

import SocialMedias from '../socialMedias';
import { EiffelTower, Cloud } from '../svgs';
import {
  Heading,
  Container,
  Description,
  MarginWrapper,
  EiffelTowerWrapper,
} from './styles';

const Intro = () => (
  <Container>
    <MarginWrapper>
      <Heading>Hello there!</Heading>
      <Description>Senior frontend developer</Description>
      <SocialMedias />
    </MarginWrapper>
    <Cloud first />
    <Cloud />
    <EiffelTowerWrapper>
      <EiffelTower />
    </EiffelTowerWrapper>
  </Container>
);

export default Intro;
