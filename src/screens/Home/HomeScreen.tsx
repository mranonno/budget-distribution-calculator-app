import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TotalBudget from "../../components/TotalBudget";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingTop: top }]}>
      <View>
        <Text style={styles.mainHeadingText}>
          Budget Distribution Calculator
        </Text>
        <Text style={styles.subTitle}>
          Allocate your budget smartly with precision and clarity
        </Text>
      </View>
      <TotalBudget />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // Add base styles here if needed
    flex: 1,
    width: "auto",
    paddingHorizontal: 20,
  },
  mainHeadingText: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  subTitle: {
    alignSelf: "center",
  },
});
