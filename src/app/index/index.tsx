import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Alert,
  FlatList,
  Image,
  Linking,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { s } from "./styles";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { categories } from "@/utils/categories";
import { LinkStorage, linkStorage } from "@/storage/link-storage";
export default function Index() {
  const [category, setCategory] = useState(categories[0].name);
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState<LinkStorage>(
    {} as LinkStorage
  );
  async function getLinks() {
    try {
      const response = await linkStorage.get();

      const filteredLinks = response.filter(
        (link) => link.category === category
      );

      setLinks(filteredLinks);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os links");
    }
  }

  function handleDetails(selected: LinkStorage) {
    setSelectedLink(selected);
    setShowModal(true);
  }

  async function linkRemove(id: string) {
    try {
      await linkStorage.delete(id);
      getLinks();
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir o link");
    }
  }

  async function handleDelete() {
    Alert.alert("Atenção", "Tem certeza que deseja excluir o link?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => linkRemove(selectedLink.id),
      },
    ]);
  }

  async function handleOpenLink() {
    try {
      const canOpen = await Linking.canOpenURL(selectedLink.url);

      if (!canOpen) {
        Alert.alert("Erro", "Não é possível abrir este link");
        return;
      }

      await Linking.openURL(selectedLink.url);
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o link");
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
  );

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image source={require("@/assets/logo.png")} style={s.logo} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => router.navigate("/add")}
        >
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => handleDetails(item)}
          />
        )}
        style={s.links}
        contentContainerStyle={s.linkContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View style={s.modal}>
          <View style={s.modalContent}>
            <View style={s.modalHeader}>
              <Text style={s.modalCategory}>{selectedLink.category}</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons
                  name="close"
                  size={32}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={s.modalLinkName}>{selectedLink.name}</Text>
            <Text style={s.modalUrl}>{selectedLink.url}</Text>

            <View style={s.modalFooter}>
              <Option
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={handleDelete}
              />
              <Option
                name="Abrir"
                icon="language"
                variant="primary"
                onPress={handleOpenLink}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
