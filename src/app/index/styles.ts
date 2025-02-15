import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  title: {
    color: colors.green[900],
    fontSize: 22,
  },
  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  logo: {
    height: 32,
    width: 38,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  linkContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopColor: colors.gray[800],
    borderTopWidth: 1,
    paddingBottom: 42,
    padding: 24,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  modalCategory: {
    flex: 1,
    color: colors.gray[400],
    fontSize: 16,
    fontWeight: "500",
  },
  modalLinkName: {
    color: colors.gray[200],
    fontSize: 18,
    fontWeight: "600",
  },
  modalUrl: {
    color: colors.gray[400],
    fontSize: 14,
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14,
  },
});
