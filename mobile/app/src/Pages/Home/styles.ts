import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { IUser } from '../../dtos/IUserDTO';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_001};
  flex: 1;
  padding-top: 70px;
`;

export const CardBox = styled.View`
  margin: 40px 10px;
`;

export const List: new <T extends IUser>() => FlatList<T> = styled(
  FlatList,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: ${getBottomSpace() + 220}px;
` as any;

export const FooterHome = styled.View`
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
