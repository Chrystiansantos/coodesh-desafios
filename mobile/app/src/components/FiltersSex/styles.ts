import styled, { css } from 'styled-components/native';

interface IButtonSexProps {
  select: boolean;
  bgColor: string;
}

export const Container = styled.View`
  height: 100px;
  width: 200px;
  justify-content: center;
`;

export const TitleSelect = styled.Text`
  font-size: 24px;
  text-align: center;
`;

export const BoxSex = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonSex = styled.TouchableOpacity<IButtonSexProps>`
  border: 1px solid #aaa;
  border-radius: 8px;
  width: 90px;
  height: 50px;
  align-items: center;
  justify-content: center;

  ${({ select, bgColor }) =>
    select &&
    css`
      background-color: ${bgColor};
    `}
`;
