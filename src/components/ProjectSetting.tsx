import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import useTheme from "../hooks/useTheme";
import Typography from "../constants/typography";
import { useMainContext } from "../hooks/useMainContext";

const ProjectSetting = () => {
  const { theme } = useTheme();
  const { projectName, setProjectName } = useMainContext();

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
        Project Name
      </Text>

      <TextInput
        style={[
          styles.input,
          {
            borderColor: theme.border,
            color: theme.body,
            backgroundColor: theme.background,
          },
        ]}
        placeholder="Enter Project Name"
        placeholderTextColor={theme.placeholder}
        value={projectName}
        onChangeText={setProjectName}
        maxLength={50}
        autoCapitalize="words"
        keyboardType="default"
      />
      {/* {projectName.trim() === "" && (
        <Text style={{ color: theme.error, fontSize: 12, marginTop: 4 }}>
          Project name is required
        </Text>
      )} */}
    </View>
  );
};

export default ProjectSetting;

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
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    height: 56,
  },
});
