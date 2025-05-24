import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const TotalBudget = () => {
  const [currency, setCurrency] = useState("USD");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Total Budget</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Budget Amount</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="e.g. 1000"
          maxLength={10}
        />
        <Text style={styles.label}>Currency</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={currency}
            onValueChange={(itemValue) => setCurrency(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="BDT" value="BDT" />
            <Picker.Item label="EURO" value="EURO" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default TotalBudget;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Android shadow
    elevation: 4,
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  inputContainer: {
    // gap: 16,
    // flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  picker: {
    // width: "100%",
  },
});
