import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Typography from "../constants/typography";
import useTheme from "../hooks/useTheme";
import { Picker } from "@react-native-picker/picker";

const RemainingBudgetAllocation = () => {
  const [percentage, setPercentage] = useState<string>("0");
  const [amount, setAmount] = useState<string>("0");
  const { theme } = useTheme();

  // Generate options from 0% to 40%
  const percentageOptions = Array.from({ length: 41 }, (_, i) => i.toString());

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
        Remaining Budget Allocations
      </Text>
      <Text style={{ color: "green", fontWeight: "500" }}>
        Remaining Budget: BDT 0.00 (60% of total)
      </Text>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.body }]}>
          Client Management
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
                color: theme.placeholder,
              },
            ]}
            placeholder="amount"
            maxLength={10}
            value={amount}
            editable={false}
          />
          <View
            style={[
              styles.pickerWrapper,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
              },
            ]}
          >
            <Picker
              selectedValue={percentage}
              onValueChange={(itemValue: string) => setPercentage(itemValue)}
              style={styles.picker}
            >
              {percentageOptions.map((value) => (
                <Picker.Item key={value} label={`${value}%`} value={value} />
              ))}
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.body }]}>
          Client Acquisition (Referral)
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
                color: theme.placeholder,
              },
            ]}
            placeholder="amount"
            maxLength={10}
            value={amount}
            editable={false}
          />
          <View
            style={[
              styles.pickerWrapper,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
              },
            ]}
          >
            <Picker
              selectedValue={percentage}
              onValueChange={(itemValue: string) => setPercentage(itemValue)}
              style={styles.picker}
            >
              {percentageOptions.map((value) => (
                <Picker.Item key={value} label={`${value}%`} value={value} />
              ))}
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.body }]}>Design Team</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
                color: theme.placeholder,
              },
            ]}
            placeholder="amount"
            maxLength={10}
            value={amount}
            editable={false}
          />
          <View
            style={[
              styles.pickerWrapper,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
              },
            ]}
          >
            <Picker
              selectedValue={percentage}
              onValueChange={(itemValue: string) => setPercentage(itemValue)}
              style={styles.picker}
            >
              {percentageOptions.map((value) => (
                <Picker.Item key={value} label={`${value}%`} value={value} />
              ))}
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.body }]}>
          Development Team
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
                color: theme.placeholder,
              },
            ]}
            placeholder="amount"
            maxLength={10}
            value={amount}
            editable={false}
          />
          <View
            style={[
              styles.pickerWrapper,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
              },
            ]}
          >
            <Picker
              selectedValue={percentage}
              onValueChange={(itemValue: string) => setPercentage(itemValue)}
              style={styles.picker}
            >
              {percentageOptions.map((value) => (
                <Picker.Item key={value} label={`${value}%`} value={value} />
              ))}
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.body }]}>
          Marketing Team
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
                color: theme.placeholder,
              },
            ]}
            placeholder="amount"
            maxLength={10}
            value={amount}
            editable={false}
          />
          <View
            style={[
              styles.pickerWrapper,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
              },
            ]}
          >
            <Picker
              selectedValue={percentage}
              onValueChange={(itemValue: string) => setPercentage(itemValue)}
              style={styles.picker}
            >
              {percentageOptions.map((value) => (
                <Picker.Item key={value} label={`${value}%`} value={value} />
              ))}
            </Picker>
          </View>
        </View>
      </View>

      <View style={[styles.addTeamContainer]}>
        <TextInput
          style={[
            styles.teamInput,
            {
              borderColor: theme.border,
              color: theme.body,
              backgroundColor: theme.background,
            },
          ]}
          placeholder="Enter team name"
          placeholderTextColor={theme.placeholder}
          maxLength={10}
          //   value={amount}
          //   onChangeText={setAmount}
        />
        <TouchableOpacity activeOpacity={0.7} style={[styles.addButton]}>
          <Text style={styles.buttonText}>Add Team</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RemainingBudgetAllocation;

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
    marginTop: 8,
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
    flex: 0.7,
  },
  picker: {
    // backgroundColor: "green",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 12,
  },
  addButton: { backgroundColor: "green", padding: 14, borderRadius: 8 },
  addTeamContainer: {
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
  },
  teamInput: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
});
