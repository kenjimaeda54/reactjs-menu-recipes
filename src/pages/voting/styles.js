import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  width: 100%;
  color: ${theme.colors.black};
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  border-radius: 10px;
  padding: 15px 0px;
  background-color: ${theme.colors.green};
  font-weight: ${theme.fonts.regular};
  font-size: 15px;
  line-height: 20px;
  color: ${theme.colors.white};
  cursor: ${({ haveField }) => (haveField ? 'pointer' : 'not-allowed')};
  opacity: ${({ haveField }) => (haveField ? 1 : 0.5)};
  &:hover {
    opacity: 0.7;
  }
`;
