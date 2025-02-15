import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    color: colors.gray[600],
    fontSize: 16,
    fontWeight: "600",
  },
  url: {
    color: colors.gray[400],
    fontSize: 14,
  },
});
