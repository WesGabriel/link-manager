import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { s } from "./style";
import { colors } from "@/styles/colors";

type Props = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export const Option = ({ name, icon, variant = "primary", ...rest }: Props) => {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === "primary" ? colors.green[300] : colors.gray[400]}
      />
      <Text style={variant === "primary" ? s.primaryTitle : s.secondaryTitle}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
