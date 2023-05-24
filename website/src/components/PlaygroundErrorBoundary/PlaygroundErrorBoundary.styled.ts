import styled from '@emotion/styled';

export const StyledWrapper = styled.section`
  width: 50%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 1250px) {
    width: 100%;
    height: 50vh;
  }
`;

export const StyledErrorTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #d63031;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledErrorMessage = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #d63031;
  text-align: center;
  margin-bottom: 20px;
`;
