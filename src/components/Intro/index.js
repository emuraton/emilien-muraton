import React from 'react';

import SocialMedias from '../socialMedias';
import { EiffelTower } from '../svgs';
import {
  Heading,
  Container,
  Description,
  MarginWrapper,
  EiffelTowerWrapper,
} from './styles';

const intro = () => (
  <Container>
    <MarginWrapper>
      <Heading>Hello there!</Heading>
      <Description>Senior frontend developer</Description>
      <SocialMedias />
    </MarginWrapper>
    <EiffelTowerWrapper>
      <EiffelTower />
    </EiffelTowerWrapper>
  </Container>
);

export default intro;
