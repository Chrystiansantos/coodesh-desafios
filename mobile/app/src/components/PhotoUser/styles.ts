import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.gray};
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;
