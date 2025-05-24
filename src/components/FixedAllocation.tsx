import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useTheme from "../hooks/useTheme";

const FixedAllocation = () => {
  const { theme } = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.componentBackground }]}
    >
      <Text style={styles.heading}>Fixed Allocation</Text>

      {/* Founders Row */}
      <View style={styles.row}>
        <View style={styles.companyFund}>
          <Text style={styles.founderName}>Company Fund (17.5%)</Text>
          <Text style={styles.companyAmount}>BDT 0.00</Text>
        </View>
        <View style={styles.zakatFund}>
          <Text style={styles.founderName}>Zakat (2.5%)</Text>
          <Text style={styles.zakatAmount}>BDT 0.00</Text>
        </View>
      </View>
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
  row: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 12, // optional spacing between items
    marginTop: 12,
  },
  companyFund: {
    flex: 1,
    backgroundColor: "#F0FDF4",
    borderRadius: 8,
    padding: 12,
  },
  zakatFund: {
    flex: 1,
    backgroundColor: "#FEFCE8",
    borderRadius: 8,
    padding: 12,
  },
  founderName: {
    fontSize: 14,
    fontWeight: "600",
  },
  companyAmount: {
    color: "#15803D",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 4,
  },
  zakatAmount: {
    color: "#A16207",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 4,
  },
});
