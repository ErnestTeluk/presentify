import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styled from '@emotion/styled';
import Layout from '@theme/Layout';
import React from 'react';

import { HeroPage } from '../components/HeroPage';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} by ${siteConfig.organizationName}`}
      description={siteConfig.tagline}
    >
      <StyledMain>
        <HeroPage />
      </StyledMain>
    </Layout>
  );
}
