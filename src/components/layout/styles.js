import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100px;
  grid-template-areas:
    'AS  SC'
    'AS  FT';
  height: 100vh;
  min-height: 340px;
`;
