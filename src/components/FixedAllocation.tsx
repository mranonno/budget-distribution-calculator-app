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
        <View style={styles.rowContainer}>
          {/* Company Fund Card */}
          <View style={[styles.allocationCard, styles.companyFundCard]}>
            <Text style={[styles.companyAmount, { color: theme.subheading }]}>
              {currency} {companyFundAmount.toFixed(2)}
            </Text>
            <Text style={[styles.label, { color: theme.body }]}>
              Company Fund
              {/* ({companyFundPercent}%) */}
            </Text>
          </View>

          {/* Zakat Card */}
          <View style={[styles.allocationCard, styles.zakatFundCard]}>
            <Text style={[styles.zakatAmount, { color: theme.subheading }]}>
              {currency} {zakatFundAmount.toFixed(2)}
            </Text>
            <Text style={[styles.label, { color: theme.body }]}>
              Zakat
              {/* ({zakatFundPercent}%) */}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default FixedAllocation;
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  allocationCard: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  // Custom backgrounds
  companyFundCard: {
    backgroundColor: "#E3FAFF",
  },
  zakatFundCard: {
    backgroundColor: "#FFEAEB",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  companyAmount: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  zakatAmount: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
});
