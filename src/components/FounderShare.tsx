import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import useTheme from "../hooks/useTheme";
import Typography from "../constants/typography";
import { Founder, useMainContext } from "../hooks/useMainContext";

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
          Select Percentage Per Founder
        </Text>
        <Text style={[styles.info, { color: theme.body }]}>
          Shares are divided equally among all founders.
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

      {/* Info Tooltip */}
      {/* <Text style={[styles.info, { color: theme.body }]}>
        Shares are divided equally among all founders.
      </Text> */}

      {/* Show total allocation */}
      <Text style={[styles.summary, { color: theme.body, marginBottom: 12 }]}>
        Total Allocation:{" "}
        <Text style={{ fontWeight: "bold" }}>
          {currency} {totalFounderAllocation.toFixed(2)}
        </Text>
      </Text>

      {/* Empty state if budget is zero */}
      {totalBudget <= 0 && (
        <Text
          style={{
            color: theme.body,
            textAlign: "center",
            marginTop: 12,
            fontSize: 14,
          }}
        >
          Please enter a total budget to calculate shares.
        </Text>
      )}

      {/* Render founders dynamically */}
      {founders.length > 0 && totalBudget > 0 && (
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
              {/* <Text style={styles.founderPercent}>
                {(100 / founders.length).toFixed(1)}%
              </Text> */}
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
    marginBottom: 12,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  picker: {
    height: 50,
  },
  info: {
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 8,
    color: "#6B7280",
  },
  summary: {
    fontSize: 14,
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  card: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexBasis: "48%",
  },

  founderName: {
    fontSize: 14,
    fontWeight: "600",
  },
  founderAmount: {
    color: "#2050D9", // Blue amount
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 4,
    marginBottom: 4,
  },
  founderPercent: {
    fontSize: 12,
    color: "#6B7280", // Gray percentage
    marginTop: 4,
  },
});
