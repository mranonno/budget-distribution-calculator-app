import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useTheme from "../hooks/useTheme";
import Typography from "../constants/typography";
import { useMainContext } from "../hooks/useMainContext";

const FixedAllocation = () => {
  const { theme } = useTheme();
  const { totalBudget, currency } = useMainContext();

  // Fixed percentages
  const companyFundPercent = 17.5;
  const zakatFundPercent = 2.5;

  // Calculated amounts
  const companyFundAmount = (totalBudget * companyFundPercent) / 100;
  const zakatFundAmount = (totalBudget * zakatFundPercent) / 100;

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
        Fixed Allocation
      </Text>

      {/* Empty state if no budget */}
      {totalBudget <= 0 && (
        <Text
          style={{
            color: theme.body,
            textAlign: "center",
            marginTop: 12,
            fontSize: 14,
          }}
        >
          Please enter a total budget to calculate fixed allocations.
        </Text>
      )}

      {/* Allocation cards */}
      {totalBudget > 0 && (
        <>
          <View style={styles.allocationCard}>
            <Text style={[styles.label, { color: theme.body }]}>
              Company Fund ({companyFundPercent}%)
            </Text>
            <Text style={styles.companyAmount}>
              {currency} {companyFundAmount.toFixed(2)}
            </Text>
          </View>

          <View style={styles.allocationCard}>
            <Text style={[styles.label, { color: theme.body }]}>
              Zakat ({zakatFundPercent}%)
            </Text>
            <Text style={styles.zakatAmount}>
              {currency} {zakatFundAmount.toFixed(2)}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default FixedAllocation;
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
  allocationCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  companyAmount: {
    color: "#15803D",
    fontWeight: "bold",
    fontSize: 18,
  },
  zakatAmount: {
    color: "#A16207",
    fontWeight: "bold",
    fontSize: 18,
  },
});
