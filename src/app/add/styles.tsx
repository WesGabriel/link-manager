import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 24,
  },
  title: {
    color: colors.gray[200],
    fontSize: 24,
    fontWeight: "600",
  },
  label: {
    color: colors.gray[400],
    fontSize: 14,
    paddingHorizontal: 15,
  },
  form: {
    padding: 15,
    gap: 16,
  },
});
