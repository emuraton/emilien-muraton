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
      <Heading>Hey there!</Heading>
      <Description>
        I'm Emilien, Frontend developer based in London, mainly working with
        React and React Native environments. I enjoy working on on both the
        "front of the front" and "back of the front".
      </Description>
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
