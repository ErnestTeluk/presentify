import Link from '@docusaurus/Link';
import styled from '@emotion/styled';
export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledSection = styled.section`
  max-width: 1152px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Content = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-flow: column;
`;

export const StyledTitle = styled.h1<{ color?: string }>`
  font-size: 58px;
  margin-bottom: 0;
  ${({ color }) => color && `color: ${color};`}
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  gap: 15px;
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
