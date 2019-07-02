import React from 'react';

import SocialMedias from '../socialMedias';
import { Heading, Container, Description } from './styles';

const intro = () => (
  <Container>
    <Heading>Hello there!</Heading>
    <Description>Senior frontend developer</Description>
    <SocialMedias />
  </Container>
);

export default intro;
