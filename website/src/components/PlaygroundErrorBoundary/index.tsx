import React, { Component, ReactNode } from 'react';

import {
  StyledErrorMessage,
  StyledErrorTitle,
  StyledWrapper,
} from './PlaygroundErrorBoundary.styled';
import { PlaygroundContext } from '../../providers/PlaygroundProvider';

interface PlaygroundErrorBoundaryProps {
  children: ReactNode;
}
interface PlaygroundErrorBoundaryState {
  error: string;
}
export class PlaygroundErrorBoundary extends Component<
  PlaygroundErrorBoundaryProps,
  PlaygroundErrorBoundaryState
> {
  constructor(props) {
    super(props);
    this.state = { error: '' };
  }

  componentDidCatch(error) {
    const { setHasError } = this.context;
    setHasError(true);
    this.setState({ error: error.message });
  }

  static contextType = PlaygroundContext;

  render() {
    const { hasError } = this.context;
    if (hasError) {
      return (
        <StyledWrapper>
          <StyledErrorTitle>Error in mdx syntax:</StyledErrorTitle>
          <StyledErrorMessage>{this.state.error}</StyledErrorMessage>
          <p>
            The status automatically refreshes if you change something in the
            editor
          </p>
        </StyledWrapper>
      );
    }

    return this.props.children;
  }
}
