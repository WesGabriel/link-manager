import { TextInput, TextInputProps } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/colors";

export const Input = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      style={s.container}
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  );
};
