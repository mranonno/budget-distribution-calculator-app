import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import useTheme from "../hooks/useTheme";
import Typography from "../constants/typography";
import { useMainContext } from "../hooks/useMainContext";

const FounderShare: React.FC = () => {
  const [percentage, setPercentage] = useState<string>("5");
  const { theme } = useTheme();
  const { founders, totalBudget, currency } = useMainContext();

  // Convert percentage string to number
  const percentValue = parseFloat(percentage);

  // Calculate total allocation for all founders
  const totalFounderAllocation =
    totalBudget > 0 ? (totalBudget * percentValue) / 100 : 0;

  // Split equally among all founders
  const founderShareEach =
    founders.length > 0 ? totalFounderAllocation / founders.length : 0;

  return (
    <View
      style={[styles.container, { backgroundColor: theme.componentBackground }]}
    >
      <Text
        style={[
          styles.heading,
          Typography.subheading,
          { color: theme.heading },
        ]}
      >
        Founder's Share
      </Text>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.body }]}>
          Shares are divided equally among all founders
        </Text>
        <View
          style={[
            styles.pickerWrapper,
            { backgroundColor: theme.background, borderColor: theme.border },
          ]}
        >
          <Picker
            selectedValue={percentage}
            onValueChange={(itemValue: string) => setPercentage(itemValue)}
            style={styles.picker}
            dropdownIconColor={theme.body}
          >
            <Picker.Item label="5%" value="5" />
            <Picker.Item label="6%" value="6" />
            <Picker.Item label="7%" value="7" />
            <Picker.Item label="8%" value="8" />
            <Picker.Item label="9%" value="9" />
            <Picker.Item label="10%" value="10" />
          </Picker>
        </View>
      </View>

      {/* Show total allocation */}
      <Text style={[styles.summary, { color: theme.body }]}>
        Total Allocation:{" "}
        <Text style={{ fontWeight: "bold" }}>
          {currency} {totalFounderAllocation.toFixed(2)}
        </Text>
      </Text>

      {/* Render founders dynamically */}
      {founders.length > 0 && (
        <View style={styles.rowContainer}>
          {founders.map((founder, index) => (
            <View
              key={index}
              style={[styles.card, { backgroundColor: founder.color }]}
            >
              <Text style={[styles.founderAmount, { color: theme.subheading }]}>
                {currency} {founderShareEach.toFixed(2)}
              </Text>
              <Text style={[styles.founderName, { color: theme.body }]}>
                {founder.name}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default FounderShare;
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
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 16,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    height: 56,
  },
  picker: {
    height: 50,
  },
  info: {
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 8,
  },
  summary: {
    fontSize: 14,
    marginBottom: 8,
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center", // Optional: center align cards
  },
  card: {
    flex: 1, // Allow card to grow
    minWidth: 140, // Minimum width per card
    maxWidth: "48%", // Max width for 2 per row
    flexGrow: 1,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16, // Add spacing between rows
  },

  founderName: {
    fontSize: 14,
    fontWeight: "600",
  },
  founderAmount: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 4,
    marginBottom: 4,
  },
  founderPercent: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
});
