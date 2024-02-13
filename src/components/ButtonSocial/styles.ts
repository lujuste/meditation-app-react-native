import styled from "styled-components/native";

type ButtonProps = {
  color: string;
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  border-radius: 50%;
  background-color: ${({ color }) => color && color};
  height: 63px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text<ButtonProps>`
  font-size: 14px;
  text-align: center;
  color: ${({ color }) => color && color};
`;

export const HStack = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 35px;
`;
