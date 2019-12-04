import React from 'react';

import Project from '../Project';

import ecommerceImg from '../../images/ecommerce-mobile.png';
import ecommerceRoomImg from '../../images/ecommerce-mobile-room.png';
import exchangeRateImg from '../../images/exchange-rate.png';
import { Section, Title } from './styles';

const Portfolio = () => (
  <>
    <Section>
      <Title>Portfolio</Title>
    </Section>
    <Project
      title="Ecommerce mobile site"
      description="A simple version of an ecommerce website made with Next.js /
          React. My main goal was to create a simple UI / UX on mobile."
      url="https://ecommerce-next-otznrnxhbb.now.sh/"
      images={[ecommerceImg, ecommerceRoomImg]}
      withBorderBottom
    />
    <Project
      title="Exchange rate tool"
      description="Simple tool to exchange money between pockets"
      url="https://github.com/emuraton/exchange-screen/"
      images={[exchangeRateImg]}
    />
    <Project
      title="Music player - Native app"
      description="Early stage native app with fun animation / UI"
      url="https://github.com/emuraton/musicApp/"
      images={[ecommerceImg]}
    />
  </>
);

export default Portfolio;
