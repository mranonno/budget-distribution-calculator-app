import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FixedAllocation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fixed Allocation</Text>

      {/* Founders Row */}
      <View style={styles.row}>
        <View style={styles.founderContainer}>
          <Text style={styles.founderName}>Company Fund (17.5%)</Text>
          <Text style={styles.founderAmount}>BDT 0.00</Text>
        </View>
        <View style={styles.founderContainer}>
          <Text style={styles.founderName}>Zakat (2.5%)</Text>
          <Text style={styles.founderAmount}>BDT 0.00</Text>
        </View>
      </View>
    </View>
  );
};

export default FixedAllocation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
  founderContainer: {
    flex: 1,
    backgroundColor: "#EFF6FF",
    borderRadius: 8,
    padding: 12,
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
});
