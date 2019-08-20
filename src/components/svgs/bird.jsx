import styled, { keyframes } from 'styled-components';

const flyCycle = keyframes`
  100% {
		background-position: -3600px 0;
	}
`;

const flyRight = keyframes`
  0% {
    transform: translateX(-10vw) scale(0.5);
  }

  15% {
    transform: translateY(2vh) translateX(10vw) scale(0.6);
  }

  30% {
    transform: translateY(0vh) translateX(30vw) scale(0.7);
  }

  45% {
    transform: translateY(4vh) translateX(50vw) scale(0.8);
  }

  60% {
    transform: translateY(2vh) translateX(70vw) scale(0.9);
  }

  75% {
    transform: translateY(0vh) translateX(90vw) scale(0.9);
  }

  90% {
    transform: translateY(0vh) translateX(110vw) scale(1);
  }

  100% {
    transform: translateY(0vh) translateX(110vw) scale(1);
  }
`;

export const Bird = styled.div`
	background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg);
	background-size: auto 100%;
	width: 88px;
	height: 125px;
	will-change: background-position;
	
	animation: ${flyCycle} 1s steps(10) infinite;
}
`;

export const BirdContainer = styled.div`
  position: absolute;
  top: 50%;
  will-change: transform;
  z-index: 3;

  animation: ${flyRight} 10s linear infinite;
`;
