import Image from 'next/image';
import styled from 'styled-components';

import { maxSizes } from '../../utils/breakpoints';

interface ArticleImgProps {
  $first?: boolean;
  $isApp?: boolean;
}

interface ArticleSectionProps {
  $withBorderBottom?: boolean;
}

export const ArticleTitle = styled.h3`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1.6rem;
`;

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticleDescription = styled.p`
  @media ${maxSizes.mobile} {
    width: 80%;
    text-align: left;
  }

  width: 60%;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.5em;
`;

export const ArticleImgContainer = styled.div`
  display: flex;
  text-align: center;
  overflow: hidden;
`;

export const ArticleImg = styled(Image)<ArticleImgProps>`
  height: 560px;
  object-fit: contain;
  margin-right: ${({ $first }) => ($first ? '20px' : 0)};
  transition: 500ms ease;

  @media ${maxSizes.mobile} {
    width: ${({ $isApp }) => ($isApp ? '40%' : '100%')};
    height: 100%;
    max-height: 260px;
  }

  &:hover {
    transform: scale(1.05) !important;
  }
`;

export const ArticleSection = styled.section<ArticleSectionProps>`
  border-bottom: ${({ $withBorderBottom }) =>
    $withBorderBottom ? '1px solid #f1f1f1' : 'none'};
  padding-bottom: ${({ $withBorderBottom }) => ($withBorderBottom ? '5em' : 0)};
`;

export const Separator = styled.hr`
  width: 6%;
  background-color: #c5c5c5;
`;
