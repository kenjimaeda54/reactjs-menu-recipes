import styled from 'styled-components';
import theme from '../../styles/theme';
export const Container = styled.div`
  display: grid;
  background-color: ${theme.colors.secondary};
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100px;
  grid-template-areas:
    'AS  SC'
    'AS  FT';
  height: 100vh;
  min-height: 340px;
`;
