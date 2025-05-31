import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import useTheme from "../hooks/useTheme";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const companyLogo = require("../../assets/xrodev-logo.png");

  return (
    <View style={[styles.navbar, { backgroundColor: theme.background }]}>
      {/* Logo Section */}

      <Image source={companyLogo} style={styles.logoImage} />

      <AntDesign
        style={styles.menuIcon}
        name="menufold"
        size={24}
        color={theme.body}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 20,
  },
  logoImage: {
    width: 120,
    height: 30,
    resizeMode: "contain",
  },
  menuIcon: {
    // marginRight: 10,
  },
});

export default Navbar;
