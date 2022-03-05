import styled from 'styled-components/native';

interface IBoxProps {
  width: number;
}

export const Container = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View<IBoxProps>`
  height: 20px;
  width: ${({ width }) => width}px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 8px;
  border-radius: 4px;
`;
