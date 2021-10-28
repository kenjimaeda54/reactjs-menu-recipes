import styled from 'styled-components';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  padding: 20px 20px;
  border-radius: 10px;
  gap: 20px;
  width: 70%;
  box-shadow: 0px 20px 30px -5px #7f89b927;
  filter: drop-shadow(0px 20px 30px -5px #7f89b927);
  transition: 0.7s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
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

export const ContainerDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Date = styled.span`
  font-weight: ${theme.fonts.regular};
  font-size: 16px;
  line-height: 19px;
  color: ${theme.colors.gray};
`;

export const Hours = styled.span`
  font-weight: ${theme.fonts.bold};
  font-size: 16px;
  line-height: 19px;
  color: ${theme.colors.gray};
`;

export const ContainerVoting = styled.div`
  display: flex;
  flex_direction: row;
  gap: 10px;
  align-items: center;
`;

export const ContainerQuantityLike = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 50px;
`;

export const Quantity = styled.strong`
  font-weight: ${theme.fonts.bold};
  font-size: 15px;
  line-height: 20px;
  color: ${theme.colors.black};
`;

export const Like = styled(FiThumbsUp)`
  width: 17px;
  height: 17px;
  color: ${theme.colors.green};
`;

export const ContainerQuantityDislike = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 50px;
`;

export const Dislike = styled(FiThumbsDown)`
  width: 17px;
  height: 17px;
  color: ${theme.colors.third};
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    opacity: 0.7;
  }
`;
