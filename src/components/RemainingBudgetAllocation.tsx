import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Typography from "../constants/typography";
import useTheme from "../hooks/useTheme";
import { MainContext } from "../context/MainContext";
import DeleteIcon from "../../assets/Icons/DeleteIcon";
import { generatePercentageOptions } from "../utils/utils";
import TeamRow from "../shared/TeamsRows";

const RemainingBudgetAllocation = () => {
  const { theme } = useTheme();
  const context = useContext(MainContext);
  const { teams, setTeams, totalBudget } = context!;
  const [newTeam, setNewTeam] = useState("");
  const percentageOptions = generatePercentageOptions();

  const getRemainingAmount = () => (totalBudget * 60) / 100;

  const handlePercentageChange = (id: number, value: string) => {
    const numericValue = parseFloat(value);
    setTeams((prev) =>
      prev.map((team) =>
        team.id === id
          ? {
              ...team,
              percentage: value,
              amount: parseFloat(
                ((getRemainingAmount() * numericValue) / 100).toFixed(2)
              ),
            }
          : team
      )
    );
  };

  const handleAddTeam = () => {
    if (!newTeam.trim()) return;

    setTeams([
      ...teams,
      {
        id: Date.now(),
        name: newTeam.trim(),
        percentage: "0",
        amount: 0,
        deleteOption: true,
      },
    ]);
    setNewTeam("");
  };

  const handleDeleteTeam = (id: number) => {
    setTeams(teams.filter((team) => team.id !== id));
  };

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
        Remaining Budget Allocation
      </Text>
      <Text style={{ color: theme.body, marginBottom: 12 }}>
        Remaining Budget :
        <Text style={{ color: "#00C843" }}>
          {" "}
          {context?.currency} {getRemainingAmount().toFixed(2)}
        </Text>{" "}
        (60 % of total)
      </Text>

      {teams.map((team) => (
        <View key={team.id} style={styles.inputContainer}>
          <Text style={[styles.label, { color: theme.body }]}>{team.name}</Text>
          <TeamRow
            team={team}
            onPercentageChange={(value) =>
              handlePercentageChange(team.id, value)
            }
            onDelete={() => handleDeleteTeam(team.id)}
            theme={theme}
          />
        </View>
      ))}

      <View style={styles.addTeamContainer}>
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
          maxLength={30}
          value={newTeam}
          onChangeText={setNewTeam}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.addButton}
          onPress={handleAddTeam}
        >
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
    marginBottom: 4,
  },
  inputContainer: {
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    height: 56,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    flex: 0.7,
    justifyContent: "center",
    height: 56,
  },
  picker: {
    height: 56,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "purple",
    padding: 14,
    borderRadius: 8,
  },
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
