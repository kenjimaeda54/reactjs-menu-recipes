import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  height: 100%;
`;

export const ContainerTitleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubTitleHeader = styled.span`
  margin: 20px 0px;
  font-weight: ${theme.fonts.bold};
  font-size: 15px;
  line-height: 20px;
  color: ${theme.colors.white};
`;

export const Title = styled.h2`
  margin: 20px 0px;
  font-weight: ${theme.fonts.bold};
  font-size: 25px;
  line-height: 20px;
  color: ${theme.colors.white};
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
