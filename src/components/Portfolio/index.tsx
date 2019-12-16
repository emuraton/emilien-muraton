import * as React from 'react';

import Project from '../Project';

import ecommerceImg from '../../images/ecommerce-mobile.png';
import ecommerceRoomImg from '../../images/ecommerce-mobile-room.png';
import exchangeRateImg from '../../images/exchange-rate.png';
import musicAppGif from '../../images/music-app.gif';

// @ts-ignore
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
      url="https://ecommerce-next-emuraton.now.sh/"
      images={[ecommerceImg, ecommerceRoomImg]}
      withBorderBottom
    />
    <Project
      title="Exchange rate tool"
      description="Simple tool to exchange money between pockets"
      url="https://exchange-screen.emilienmuraton.now.sh/"
      images={[exchangeRateImg]}
      withBorderBottom
    />
    <Project
      title="Music player - Native app"
      description="Early stage native app with fun animation / UI"
      url="https://github.com/emuraton/musicApp/"
      images={[musicAppGif]}
    />
  </>
);

export default Portfolio;
