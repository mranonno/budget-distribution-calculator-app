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
import Typography from "../../constants/typography";
import RemainingBudgetAllocation from "../../components/RemainingBudgetAllocation";

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
          <Text
            style={[
              Typography.heading,
              { color: theme.heading, textAlign: "center" },
            ]}
          >
            Budget Distribution Calculator
          </Text>
          <Text
            style={[
              Typography.subheading,
              {
                color: theme.subheading,
                textAlign: "center",
              },
            ]}
          >
            Allocate your budget smartly with precision and clarity
          </Text>

          <TotalBudget />
          <FounderShare />
          <FixedAllocation />
          <RemainingBudgetAllocation />
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
});
