import React, { useState } from "react";

import {
  Button,
  Container,
  Header,
  Wrap,
  Text,
  VStack,
  DescriptionsText,
} from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import ButtonSocial from "../../components/ButtonSocial";
import { StyledInput } from "../../components/InputCustom/styles";
import ButtonWide from "../../components/ButtonWide";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Register: React.FC = () => {
  const navigation = useNavigation();

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

          <Header>Crie sua conta</Header>

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
          <StyledInput
            isFocus={inputControl.password}
            placeholder="Senha"
            keyboardType="default"
            onFocus={() =>
              setInputControl({
                ...inputControl,
                password: true,
              })
            }
            onBlur={() =>
              setInputControl({
                ...inputControl,
                password: false,
              })
            }
          />

          <VStack>
            <DescriptionsText>
              Eu li e concordo com o termo de uso do app.
            </DescriptionsText>

            <BouncyCheckbox
              size={25}
              fillColor="#8E97FD"
              unfillColor="transparent"
              iconStyle={{ borderColor: "#8E97FD" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked: boolean) => {}}
            />
          </VStack>

          <ButtonWide mt={"10px"} label="CADASTRAR" />
        </Wrap>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Register;
