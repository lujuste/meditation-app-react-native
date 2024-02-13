import React from "react";
import { Text as TextNative } from "react-native";
import {
  Button,
  Container,
  Text,
  TextBody,
  TextBtn,
  TextFooter,
  VStack,
} from "./styles";
import ImageWelcome from "../../assets/welcome-meditation.svg";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useIsFocused } from "@react-navigation/native";
import { RoutesPublicProps } from "../../@types/routes";
import ButtonWide from "../../components/ButtonWide";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";

const Welcome: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RoutesPublicProps>>();

  const isScreenFocused = useIsFocused();

  return (
    <Container>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={isScreenFocused ? "dark-content" : "light-content"}
        translucent
      />
      <ImageWelcome />
      <VStack>
        <Text>Bora meditar?</Text>
        <TextBody>
          Muitas pessoas estao usando o app para pequenos relaxamentos
        </TextBody>

        <ButtonWide
          label={"CRIAR CONTA"}
          onPress={() => navigation.navigate("Register")}
          mt={"55px"}
        ></ButtonWide>

        <TextFooter onPress={() => navigation.navigate("Login")}>
          JA POSSUI CONTA?
          <TextNative style={{ fontFamily: "Roboto_700Bold", color: "#fff" }}>
            {"  "}
            ENTRAR.
          </TextNative>
        </TextFooter>
      </VStack>
    </Container>
  );
};

export default Welcome;
