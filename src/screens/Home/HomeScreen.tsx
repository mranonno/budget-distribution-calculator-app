import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
} from "react-native";
import TotalBudget from "../../components/TotalBudget";
import FounderShare from "../../components/FounderShare";
import FixedAllocation from "../../components/FixedAllocation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../constants/colors";
import RemainingBudgetAllocation from "../../components/RemainingBudgetAllocation";
import BudgetSummary from "../../components/BudgetSummary";
import Navbar from "../../shared/Navbar";
import ProjectSetting from "../../components/ProjectSetting";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View
      style={{ flex: 1, paddingTop: top, backgroundColor: theme.background }}
    >
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
          <Navbar />
          <ProjectSetting />
          <TotalBudget />
          <FounderShare />
          <FixedAllocation />
          <RemainingBudgetAllocation />
          <BudgetSummary />

          <Text style={[styles.copyrightText, { color: theme.body }]}>
            Copyright © 2025 - All right reserved by Xrodev
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  copyrightText: { textAlign: "center", marginTop: 20 },
});
