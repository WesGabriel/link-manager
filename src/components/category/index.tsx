import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { s } from "./styles";

type Props = PressableProps & {
  name: string;
  isSelected: boolean;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const Category = ({ name, icon, isSelected, ...rest }: Props) => {
  const color = isSelected ? colors.green[300] : colors.gray[400];

  return (
    <Pressable style={s.container} {...rest}>
      <MaterialIcons name={icon} size={24} style={{ color }} />
      <Text style={[s.name, { color }]}>{name}</Text>
    </Pressable>
  );
};
