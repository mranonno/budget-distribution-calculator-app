import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Typography from "../constants/typography";
import useTheme from "../hooks/useTheme";

const TotalBudget: React.FC = () => {
  const [currency, setCurrency] = useState<string>("USD");
  const [amount, setAmount] = useState<string>("");
  const { theme } = useTheme();

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
        Enter Total Budget
      </Text>
      <View style={styles.inputContainer}>
        <Text style={[Typography.body, { color: theme.body, marginBottom: 4 }]}>
          Budget Amount
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.border,
              color: theme.body,
              backgroundColor: theme.background,
            },
          ]}
          keyboardType="numeric"
          placeholder="e.g. 1000"
          placeholderTextColor={theme.placeholder}
          maxLength={10}
          value={amount}
          onChangeText={setAmount}
        />
        <Text style={[Typography.body, { color: theme.body, marginBottom: 4 }]}>
          Currency
        </Text>
        <View
          style={[
            styles.pickerWrapper,
            {
              borderColor: theme.border,
              backgroundColor: theme.background,
            },
          ]}
        >
          <Picker
            selectedValue={currency}
            onValueChange={(itemValue: string) => setCurrency(itemValue)}
            style={[styles.picker, { color: theme.body }]}
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
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  inputContainer: {},
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  picker: {},
});
