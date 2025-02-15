import { Alert, Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";
import { categories } from "@/utils/categories";
import { linkStorage } from "@/storage/link-storage";

export default function Add() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState(categories[0].name);

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione a categoria");
      }
      if (!name.trim()) {
        return Alert.alert("Nome", "Selecione o nome");
      }
      if (!url.trim()) {
        return Alert.alert("URL", "Digite a URL");
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      });

      Alert.alert("Sucesso", "Novo link salvo com sucesso", [
        {
          text: "Ok",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "Não foi possível salvar o link");
      console.log(error);
    }
  }

  return (
    <View style={s.container}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={s.title}>Novo</Text>
      </View>

      <Text style={s.label}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={s.form}>
        <Input placeholder="Nome" onChangeText={setName} />
        <Input placeholder="url" onChangeText={setUrl} autoCapitalize="none" />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
