import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DeleteIcon from "../../assets/Icons/DeleteIcon";
import { Team } from "../types/types";
import { Picker } from "@react-native-picker/picker";
import { generatePercentageOptions } from "../utils/utils";

interface TeamRowProps {
  team: Team;
  onPercentageChange: (value: string) => void;
  onDelete: () => void;
  theme: any;
}

const TeamRow: React.FC<TeamRowProps> = ({
  team,
  onPercentageChange,
  onDelete,
  theme,
}) => {
  const percentageOptions = generatePercentageOptions();
  return (
    <View style={styles.row}>
      <TextInput
        style={[styles.input, { flex: 0.7, borderColor: theme.border }]}
        value={String(team.amount)}
        editable={false}
      />

      <View style={[styles.pickerWrapper, { borderColor: theme.border }]}>
        <Picker
          selectedValue={team.percentage}
          onValueChange={onPercentageChange}
          style={styles.picker}
        >
          {percentageOptions.map((value) => (
            <Picker.Item key={value} label={`${value}%`} value={value} />
          ))}
        </Picker>
      </View>

      {team.deleteOption && (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={`Delete team ${team.name}`}
          onPress={onDelete}
        >
          <DeleteIcon color="#F30000" width={24} height={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
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
});

export default TeamRow;
