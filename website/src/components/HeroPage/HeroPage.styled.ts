import Link from '@docusaurus/Link';
import styled from '@emotion/styled';
export const StyledImage = styled.img`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
`;

export const StyledSection = styled.section`
  max-width: 1152px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 1230px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    flex-flow: column-reverse;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 574px) {
    width: 100%;
    padding: 0 15px;
  }
`;

export const StyledTitle = styled.h1<{ color?: string }>`
  font-size: 58px;
  margin-bottom: 0;
  ${({ color }) => color && `color: ${color};`};

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 48px;
  }

  @media screen and (max-width: 868px) {
    font-size: 38px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  gap: 15px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const StyledLink = styled(Link)`
  padding: 15px;
  border-radius: 50px;
  background-color: var(--ifm-link-color);
  color: white;
  text-decoration: var(--ifm-link-decoration);
  transition: background-color var(--ifm-transition-fast)
    var(--ifm-transition-timing-default);

  &:hover {
    color: white;
    background-color: var(--ifm-color-primary-darkest);
    text-decoration: none;
  }
`;
