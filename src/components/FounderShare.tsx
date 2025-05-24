import React, { useState } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Colors from "../constants/colors";

const FounderShare: React.FC = () => {
  const [percentage, setPercentage] = useState<string>("5");
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Founder's Share</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select percentage per Founder</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={percentage}
            onValueChange={(itemValue: string) => setPercentage(itemValue)}
            style={styles.picker}
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

      {/* Founders Row */}
      <View style={styles.row}>
        <View style={styles.founderContainer}>
          <Text style={styles.founderName}>Rifat Ansari</Text>
          <Text style={styles.founderAmount}>BDT 0.00</Text>
        </View>
        <View style={styles.founderContainer}>
          <Text style={styles.founderName}>Yousuf Sharker</Text>
          <Text style={styles.founderAmount}>BDT 0.00</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.founderContainer}>
          <Text style={styles.founderName}>Atikur Rahman</Text>
          <Text style={styles.founderAmount}>BDT 0.00</Text>
        </View>
        <View style={styles.founderContainer}>
          <Text style={styles.founderName}>Rayan Hossain</Text>
          <Text style={styles.founderAmount}>BDT 0.00</Text>
        </View>
      </View>
    </View>
  );
};

export default FounderShare;

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
  inputContainer: {},
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  picker: {},
  row: {
    flexDirection: "row",
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
