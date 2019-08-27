import React from 'react';

import {
  ArticleTitle,
  ArticleContainer,
  ArticleDescription,
  ArticleImg,
  ArticleSection,
  Spacing,
} from './styles';

const Project = ({ title, description, url, images }) => (
  <ArticleSection>
    <ArticleContainer>
      <ArticleTitle>{title}</ArticleTitle>
      <Spacing />
      <ArticleDescription>{description}</ArticleDescription>
      <ArticleContainer>
        <a href={url} target="_blank">
          <>
            <ArticleImg src={images[0]} first alt="" />
            {images[1] && <ArticleImg src={images[1]} alt="" />}
          </>
        </a>
      </ArticleContainer>
    </ArticleContainer>
  </ArticleSection>
);

export default Project;
