// src/components/shared/SummaryRow.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { TextStyle } from "react-native";

interface SummaryRowProps {
  label: string;
  value: string;
  theme: {
    body: string;
  };
  bold?: boolean;
  green?: boolean;
  labelStyle?: TextStyle;
  valueStyle?: TextStyle;
}

const SummaryRow: React.FC<SummaryRowProps> = ({
  label,
  value,
  theme,
  bold = false,
  green = false,
  labelStyle,
  valueStyle,
}) => {
  return (
    <View style={styles.row}>
      <Text
        style={[
          styles.label,
          { color: theme.body },
          bold ? styles.bold : null,
          labelStyle,
        ]}
      >
        {label}
      </Text>
      <Text
        style={[
          styles.value,
          { color: green ? "green" : theme.body },
          bold ? styles.bold : null,
          valueStyle,
        ]}
      >
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default SummaryRow;
