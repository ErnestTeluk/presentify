import React from 'react';

import {
  StyledImage,
  StyledSection,
  StyledTitle,
  ButtonsWrapper,
  StyledLink,
  Content,
} from './HeroPage.styled';

export const HeroPage = (): JSX.Element => (
  <StyledSection>
    <Content>
      <StyledTitle color="#6c5ce7">Presentify</StyledTitle>
      <StyledTitle>Presentation decks using MDX in React</StyledTitle>
      <ButtonsWrapper>
        <StyledLink to="/docs/getting-started/installation">
          Getting Started
        </StyledLink>
        <StyledLink to="/docs/getting-started/why-presentify">
          Why Presentify?
        </StyledLink>
        <StyledLink to="https://github.com/ErnestTeluk/presentify">
          View on Github
        </StyledLink>
      </ButtonsWrapper>
    </Content>
    <Content>
      <StyledImage src="/presentify/img/logo2.svg" alt="presentify logo" />
    </Content>
  </StyledSection>
);
