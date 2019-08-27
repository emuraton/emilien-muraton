import React from 'react';

import {
  ArticleTitle,
  ArticleContainer,
  ArticleDescription,
  ArticleImg,
  ArticleSection,
  ArticleImgContainer,
  Separator,
} from './styles';

const Project = ({ title, description, url, images, withBorderBottom }) => {
  const hasMutltipleImgs = images.length >= 1;
  return (
    <ArticleSection withBorderBottom={withBorderBottom}>
      <ArticleContainer>
        <ArticleTitle>{title}</ArticleTitle>
        <Separator />
        <ArticleDescription>{description}</ArticleDescription>
        <ArticleImgContainer>
          <a href={url} target="_blank">
            <>
              <ArticleImg src={images[0]} first={hasMutltipleImgs} alt="" />
              {hasMutltipleImgs && <ArticleImg src={images[1]} alt="" />}
            </>
          </a>
        </ArticleImgContainer>
      </ArticleContainer>
    </ArticleSection>
  );
};

export default Project;
