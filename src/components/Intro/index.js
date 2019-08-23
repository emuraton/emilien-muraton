import React from 'react';

import SocialMedias from '../socialMedias';
import Cloud from '../svgs/Cloud';
import EiffelTower from '../svgs/EiffelTower';
import { BirdContainer, Bird } from '../svgs/Bird';
import {
  Heading,
  Container,
  Description,
  MarginWrapper,
  EiffelTowerWrapper,
  FlexWrapper,
} from './styles';

const Intro = () => (
  <Container>
    <FlexWrapper>
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
      <BirdContainer>
        <Bird />
      </BirdContainer>
      <EiffelTowerWrapper>
        <EiffelTower />
      </EiffelTowerWrapper>
    </FlexWrapper>
  </Container>
);

export default Intro;
