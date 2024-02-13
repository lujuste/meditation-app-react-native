import React, { useState } from "react";

import {
  Button,
  Container,
  Header,
  Wrap,
  Text,
  VStack,
  DescriptionsText,
  TextLog,
} from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import ButtonSocial from "../../components/ButtonSocial";
import { StyledInput } from "../../components/InputCustom/styles";
import ButtonWide from "../../components/ButtonWide";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { StackNavigationProp } from "@react-navigation/stack";
import { RoutesPublicProps } from "../../@types/routes";

const Login: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RoutesPublicProps>>();

  const [inputControl, setInputControl] = useState({
    email: false,
    name: false,
    password: false,
  });

  return (
    <Container>
      <KeyboardAwareScrollView>
        <Wrap>
          <Button onPress={() => navigation.goBack()}>
            <ArrowLeft size={19} color="#fff" />
          </Button>

          <Header>Bem vindo!</Header>

          <ButtonSocial
            social="facebook"
            bgColor="#7583CA"
            textLabel="Continuar com facebook"
            colorText="#fff"
          />

          <ButtonSocial
            social="google"
            bgColor="#fff"
            textLabel="Continuar com google"
            colorText="#000"
          />

          <Text>OU FACA LOGIN COM EMAIL</Text>

          <StyledInput
            isFocus={inputControl.name}
            placeholder="Seu nome"
            keyboardType="default"
            onFocus={() =>
              setInputControl({
                ...inputControl,
                name: true,
              })
            }
            onBlur={() =>
              setInputControl({
                ...inputControl,
                name: false,
              })
            }
          />

          <StyledInput
            isFocus={inputControl.email}
            placeholder="Seu e-mail"
            keyboardType="default"
            onFocus={() =>
              setInputControl({
                ...inputControl,
                email: true,
              })
            }
            onBlur={() =>
              setInputControl({
                ...inputControl,
                email: false,
              })
            }
          />

          <ButtonWide mt={"20px"} label="Entrar" />
          <TextLog>Esqueceu o acesso? Recupere.</TextLog>
        </Wrap>
      </KeyboardAwareScrollView>
      <TextLog onPress={() => navigation.navigate("Register")}>
        AINDA NAO POSSUI CONTA? REGISTRAR
      </TextLog>
    </Container>
  );
};

export default Login;
