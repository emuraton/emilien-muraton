import type { StaticImageData } from 'next/image';
import * as React from 'react';

import {
  ArticleContainer,
  ArticleDescription,
  ArticleImg,
  ArticleImgContainer,
  ArticleSection,
  ArticleTitle,
  Separator,
} from './styles';

interface IProjectProps {
  title: string;
  description: string;
  url: string;
  images: StaticImageData[];
  withBorderBottom?: boolean;
  isApp?: boolean;
}

const Project: React.FC<IProjectProps> = ({
  title,
  description,
  url,
  images,
  withBorderBottom,
  isApp,
}) => {
  const hasMutltipleImgs = images.length > 1;
  return (
    <ArticleSection $withBorderBottom={withBorderBottom}>
      <ArticleContainer>
        <ArticleTitle>{title}</ArticleTitle>
        <Separator />
        <ArticleDescription>{description}</ArticleDescription>
        <ArticleImgContainer>
          <a href={url} target="_blank" rel="noreferrer">
            <>
              <ArticleImg
                src={images[0]}
                $first={hasMutltipleImgs}
                alt={title}
                $isApp={isApp}
              />
              {hasMutltipleImgs && (
                <ArticleImg src={images[1]} alt="" $isApp={isApp} />
              )}
            </>
          </a>
        </ArticleImgContainer>
      </ArticleContainer>
    </ArticleSection>
  );
};

export default Project;
