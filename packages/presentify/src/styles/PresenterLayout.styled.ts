import styled from '@emotion/styled';
export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #6c5ce7;
  padding: 0 50px 50px 50px;
  gap: 50px;
  display: flex;
`;

export const SlideContainer = styled.div`
  width: 60%;
  height: 100%;
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: calc(100% - 38px);
  border: 5px solid #2d3436;
  background-color: #fff;
`;

export const NextSlideAndNotesWrapper = styled.div`
  width: 40%;
  height: 100%;
  gap: 50px;
  display: flex;
  flex-flow: column;
`;

export const NextSlideContainer = styled.div`
  width: 100%;
  height: 50%;
`;

export const NextSlideWrapper = styled.div`
  width: 100%;
  height: calc(100% - 38px);
  border: 5px solid #2d3436;
  background-color: #fff;
`;

export const NotesContainer = styled.div`
  width: 100%;
  height: 50%;
`;

export const NotesWrapper = styled.div`
  width: 100%;
  height: calc(100% - 38px);
  border: 5px solid #2d3436;
  background-color: #fff;
  padding: 20px;
`;
