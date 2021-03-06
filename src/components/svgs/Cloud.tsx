import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { maxSizes } from '../../utils/breakpoints';

const cloudAnimation = keyframes`
  0% { transform: translateX(10vw); }
  100% { transform: translateX(100vw); }
`;

const CloudSVG = styled.svg`
  position: absolute;
  width: 160px;
  z-index: 2;
  animation: ${cloudAnimation} 30s linear infinite;
  margin-left: ${props => props.first && '400px'};
  bottom: ${props => (props.first ? '160px' : '200px')};

  @media ${maxSizes.mobile} {
    display: none;
  }
`;

const Cloud = props => (
  <CloudSVG viewBox="0 0 267.488 64.523" {...props}>
    <path
      d="M12.797 64.523h238.167c.087 0 3.423-.23 3.507-.25 1.436-.33 13.624-3.328 12.994-11.022-.602-7.356-8.282-9.598-14.676-9.962-1.07-.06-1.92-.855-1.95-1.86-.106-3.603-1.344-11.347-10.04-11.347-5.78 0-8.614 1.467-10 2.904-.61.63-1.705.37-1.897-.46-1.37-5.943-5.836-18.098-19.436-18.098-18 0-19.472 16.625-23.23 15.258-4.395-1.6-6.77-30.288-26.77-29.662-13.526.424-20.65 10.013-23.843 16.177-.973 1.88-3.763 2.022-4.928.24C126.667 10.287 118.257.438 105.464.015c-12.89-.427-20.057 9.294-23.26 15.352-.872 1.652-3.323 1.755-4.39.208-2.89-4.185-8.805-9.335-19.54-6.11C48.39 12.43 46.45 20.907 46.338 26.645c-.03 1.563-1.918 2.428-3.252 1.495-2.43-1.698-6.18-3.02-11.622-1.816-7.286 1.61-9.337 7.103-9.872 10.82-.25 1.73-1.945 2.96-3.772 2.638-4.745-.835-12.915-.84-17.023 7.52-2.303 4.69 0 17.22 12 17.22z"
      fill="#f7f1e6"
    ></path>
  </CloudSVG>
);

export default Cloud;
