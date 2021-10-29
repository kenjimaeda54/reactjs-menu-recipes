import styled from 'styled-components';
import theme from '../../styles/theme';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineHowToVote } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: AS;
  background-color: ${theme.colors.primary};
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 100px;
  padding-left: 15px;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  gap: 55px;
`;

export const ContainerTitle = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  gap: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.strong`
  font-weight: ${theme.fonts.regular};
  color: ${theme.colors.white};
  font-size: 19px;
  line-height: 23px;
`;

export const Home = styled(AiOutlineHome)`
  width: 20px;
  height: 20px;
  color: ${theme.colors.white};
`;

export const Cadastre = styled(BiBookAdd)`
  width: 20px;
  height: 20px;
  color: ${theme.colors.white};
`;

export const Vote = styled(MdOutlineHowToVote)`
  width: 20px;
  height: 20px;
  color: ${theme.colors.white};
`;

export const Edit = styled(FaRegEdit)`
  width: 20px;
  height: 20px;
  color: ${theme.colors.white};
`;
