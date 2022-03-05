import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 120px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 30px;
  padding: 0px 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  flex-direction: row;
  align-items: center;
`;
