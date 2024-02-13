import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Button, Text, HStack } from "./styles";

import FacbookIcon from "../../assets/facebook.svg";
import GoogleIcon from "../../assets/google.svg";

type Props = TouchableOpacityProps & {
  social: "facebook" | "google";
  bgColor: string;
  textLabel: string;
  colorText: string;
};

const ButtonSocial: React.FC<Props> = ({
  bgColor,
  textLabel,
  social,
  colorText,
}) => {
  return (
    <Button color={bgColor}>
      <HStack>
        {social === "facebook" ? <FacbookIcon /> : <GoogleIcon />}
      </HStack>
      <Text color={colorText}> {textLabel} </Text>
    </Button>
  );
};

export default ButtonSocial;
