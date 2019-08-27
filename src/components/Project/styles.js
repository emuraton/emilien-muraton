import styled from 'styled-components';

export const ArticleTitle = styled.h3`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1.6rem;
`;

export const ArticleContainer = styled.article`
  display flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticleDescription = styled.p`
  width: 60%;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.5em;
`;

export const ArticleImgContainer = styled.div`
  display: flex;
`;

export const ArticleImg = styled.img`
  height: 560px;
  object-fit: contain;
  margin-right: ${props => props.first && '20px'};
`;

export const ArticleSection = styled.section``;

export const Spacing = styled.hr`
  width: 6%;
  background-color: #c5c5c5;
`;
