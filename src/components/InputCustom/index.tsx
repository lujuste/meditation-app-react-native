import React from "react";
import { StyledInput } from "./styles";
import { TextInputProps } from "react-native";

// import { Container } from './styles';

type Props = TextInputProps & {
  isFocused: boolean;
};

const InputCustom: React.FC<Props> = ({ isFocused, ...rest }) => {
  return <StyledInput {...rest} isFocus={isFocused} />;
};

export default InputCustom;
