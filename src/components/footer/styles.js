import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  grid-area: FT;
  background-color: ${theme.colors.third};
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 20px;
  overflow-y: hidden;
`;

export const BodyTitle = styled.div`
  display: flex;
  min-height: 50px;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.span`
  font-weight: ${theme.fonts.light};
  color: ${theme.colors.white};
  font-size: 13px;
  line-height: 15px;
`;
