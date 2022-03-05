import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  border-radius: 8px;
  padding: 0px 10px;
  flex: 1;
  margin-right: 20px;
`;

export const TextInput = styled.TextInput`
  height: 40px;
  color: ${({ theme }) => theme.colors.black};
  flex: 1;
`;
