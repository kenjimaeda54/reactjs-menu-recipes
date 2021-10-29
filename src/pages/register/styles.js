import styled from 'styled-components';
import theme from '../../styles/theme';
import { BsCheckLg } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px;
  overflow-x: hidden;
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
  margin-bottom: 10px;
`;

export const ContainerBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  padding: 20px 20px;
  border-radius: 10px;
  gap: 20px;
  box-shadow: 0px 20px 30px -5px #7f89b927;
  filter: drop-shadow(0px 20px 30px -5px #7f89b927);
  transition: 0.7s;
  width: 70%;
`;

export const TitleCard = styled.h2`
  font-weight: ${theme.fonts.medium};
  font-size: 20px;
  line-height: 25px;
`;

export const Photo = styled.img``;

export const Description = styled.p`
  font-weight: ${theme.fonts.light};
  font-size: 13px;
  line-height: 17px;
  color: ${theme.colors.gray};
`;

export const ContainerSelect = styled.button`
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  background-color: ${theme.colors.lightGreen};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Select = styled(BsCheckLg)`
  color: ${theme.colors.green};
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px 10px;
  border-radius: 4px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkGray};
  font-weight: ${theme.fonts.medium};
  font-size: 15px;
  line-height: 17px;
`;

export const InputDescription = styled.textarea`
  padding: 20px 10px;
  border-radius: 4px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkGray};
  font-weight: ${theme.fonts.medium};
  font-size: 15px;
  line-height: 17px;
`;
