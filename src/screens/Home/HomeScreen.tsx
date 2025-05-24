import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import TotalBudget from "../../components/TotalBudget";
import FounderShare from "../../components/FounderShare";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: top }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={[
            styles.container,
            { paddingTop: 20, paddingBottom: 40 },
          ]}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.mainHeadingText}>
            Budget Distribution Calculator
          </Text>
          <Text style={styles.subTitle}>
            Allocate your budget smartly with precision and clarity
          </Text>

          <TotalBudget />
          <FounderShare />
          <FounderShare />
          <FounderShare />
          {/* Add more components here to test scrolling */}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  mainHeadingText: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 8,
  },
  subTitle: {
    alignSelf: "center",
    marginBottom: 16,
  },
});
