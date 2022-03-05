import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(14, 14, 16, 0.5);
`;

export const Content = styled.View`
  margin-top: 160px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  align-items: center;
`;

export const BoxPhoto = styled.View`
  margin-top: -50px;
`;

export const CloseModal = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 30px;
  margin-top: -40px;
`;

export const Button = styled.TouchableOpacity``;

export const Header = styled.View`
  margin-top: 30px;
  align-items: center;
  margin-bottom: 100px;
`;

export const Title = styled.Text`
  font-size: 32px;
`;
export const NationalitySexBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Nationality = styled.Text`
  font-size: 24px;
  margin-right: 15px;
`;

export const BoxContent = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TextBoxContent = styled.Text`
  margin-left: 10px;
  font-size: 18px;
`;
