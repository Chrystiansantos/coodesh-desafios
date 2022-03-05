import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_001};
  flex: 1;
  padding-top: 70px;
`;

export const CardBox = styled.View`
  margin: 40px 10px;
  margin-bottom: ${getBottomSpace() + 200}px;
`;
