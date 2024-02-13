import React from "react";
import { Button, TextBtn } from "./styles";
import { ButtonProps } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

type Props = TouchableOpacityProps & {
  label: string;
  mt: string;
};

const ButtonWide: React.FC<Props> = ({ label, mt, ...rest }) => {
  return (
    <Button mt={mt} {...rest}>
      <TextBtn> {label} </TextBtn>
    </Button>
  );
};

export default ButtonWide;
