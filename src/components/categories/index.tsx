import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { s } from "./styles";

type Props = {
  selected: string;
  onChange: (value: string) => void;
};

export const Categories = ({ selected, onChange }: Props) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={s.container}
      contentContainerStyle={s.content}
      showsHorizontalScrollIndicator={false}
    />
  );
};
