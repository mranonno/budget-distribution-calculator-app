// src/components/shared/Divider.tsx
import React from "react";
import { View } from "react-native";

interface DividerProps {
  theme?: {
    border: string;
  };
  thickness?: number;
  marginVertical?: number;
}

const Divider: React.FC<DividerProps> = ({
  theme,
  thickness = 0.2,
  marginVertical = 4,
}) => {
  return (
    <View
      style={{
        borderWidth: thickness,
        borderColor: theme?.border || "#ccc",
        marginVertical: marginVertical,
      }}
    />
  );
};

export default Divider;
