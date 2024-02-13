import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme && `#191414`};
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 32px;
  font-family: Roboto_700Bold;
  margin-top: 20px;
`;

export const TextBody = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Roboto_500Medium;
  text-align: center;
  max-width: 300px;
  margin-top: 30px;
  color: #a1a4b2;
`;

export const TextBtn = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Roboto_500Medium;
  text-align: center;
  max-width: 300px;
`;

export const TextFooter = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: Roboto_400Regular;
  color: #a1a4b2;
  margin-top: 20px;
`;

export const VStack = styled.View`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  padding: 0 25px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 63px;
  background: #8e97fd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 55px;
`;
