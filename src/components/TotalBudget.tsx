import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Typography from "../constants/typography";
import useTheme from "../hooks/useTheme";
import { useMainContext } from "../hooks/useMainContext";

const TotalBudget: React.FC = () => {
  const { theme } = useTheme();
  const { totalBudget, setTotalBudget, currency, setCurrency } =
    useMainContext();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.componentBackground }]}
    >
      <Text
        style={[
          Typography.subheading,
          { color: theme.heading, marginBottom: 12 },
        ]}
      >
        Total Budget
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.border,
              color: theme.body,
              backgroundColor: theme.background,
              flex: 0.6,
            },
          ]}
          keyboardType="numeric"
          placeholder="Enter Amount"
          placeholderTextColor={theme.placeholder}
          maxLength={10}
          value={totalBudget === 0 ? "" : totalBudget.toString()}
          onChangeText={setTotalBudget}
        />

        <View
          style={[
            styles.pickerWrapper,
            {
              borderColor: theme.border,
              backgroundColor: theme.background,
              flex: 0.5,
            },
          ]}
        >
          <Picker
            selectedValue={currency}
            onValueChange={(itemValue: string) => setCurrency(itemValue)}
          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="BDT" value="BDT" />
            <Picker.Item label="EUR" value="EUR" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default TotalBudget;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap", // Allow wrapping on small screens
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    height: 56,
    minWidth: 120, // Prevent shrinking too much
    flexGrow: 1, // Let it grow as needed
    flexBasis: "50%", // Default: 2 per row if space allows
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    height: 56,
    minWidth: 100,
    flexGrow: 0.4,
    flexBasis: "40%", // Adjust based on content
  },
});
