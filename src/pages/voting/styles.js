import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

export const Title = styled.h2`
  margin: 20px 0px;
  font-weight: ${theme.fonts.bold};
  font-size: 25px;
  line-height: 20px;
  color: ${theme.colors.white};
`;

export const SubTitle = styled.h2`
  font-weight: ${theme.fonts.regular};
  font-size: 13px;
  line-height: 17px;
  color: ${theme.colors.white};
  margin-bottom: 100px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
