import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  grid-area: SC;
  display: flex;
  background-color: ${theme.colors.secondary};
  width: 100%;
  overflow-y: scroll;
  height: calc(100vh - 100px);
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.secondary};
  }
`;
