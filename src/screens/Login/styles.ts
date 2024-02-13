import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #191414;
  padding: 25px;
`;

export const Button = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  display: flex;

  /* background-color: red; */
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #fff;
`;

export const Wrap = styled.ScrollView`
  flex: 1;
  background-color: #191414;
  padding: 0 25px;
`;

export const Header = styled.Text`
  color: #fff;
  font-size: 30px;
  font-family: Roboto_700Bold;
  margin: 40px auto 30px auto;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: Roboto_500Medium;
  color: #fff;
  margin: 30px auto 15px auto;
`;

export const TextLog = styled.Text`
  font-size: 14px;
  font-family: Roboto_400Regular;
  color: #fff;
  margin: 20px auto 15px auto;
`;

export const VStack = styled.View`
  width: 100%;
  height: 50px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  flex-direction: row;
`;

export const DescriptionsText = styled.Text`
  font-size: 14px;
  font-family: Roboto_700Bold;
  color: #fff;
  margin-top: 18px;
  /* margin: 30px auto 15px auto; */
`;
