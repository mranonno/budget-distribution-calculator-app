import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
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
      <Text style={[styles.info, { color: theme.body }]}>
        Shares are divided equally among all founders.
      </Text>

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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          {founders.map((founder, index) => (
            <View key={index} style={styles.founderContainer}>
              <Text style={[styles.founderName, { color: theme.body }]}>
                {founder.name}
              </Text>
              <Text style={styles.founderAmount}>
                {currency} {founderShareEach.toFixed(2)}
              </Text>
              <Text style={styles.founderPercent}>
                {(100 / founders.length).toFixed(1)}%
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default FounderShare;
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
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  inputContainer: {},
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
  },
  summary: {
    fontSize: 14,
  },
  scrollViewContent: {
    flexDirection: "row",
    gap: 12,
    paddingBottom: 12,
  },
  founderContainer: {
    minWidth: 130,
    maxWidth: 160,
    backgroundColor: "#EFF6FF",
    borderRadius: 8,
    padding: 12,
    justifyContent: "space-between",
  },
  founderName: {
    fontSize: 14,
    fontWeight: "600",
  },
  founderAmount: {
    color: "#2050D9",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 4,
  },
  founderPercent: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
});
