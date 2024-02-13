import styled from "styled-components/native";

export const Button = styled.TouchableOpacity<{ mt: string }>`
  width: 100%;
  height: 63px;
  background: #8e97fd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: ${({ mt }) => mt && mt};
`;

export const TextBtn = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Roboto_500Medium;
  text-align: center;
  max-width: 300px;
`;
