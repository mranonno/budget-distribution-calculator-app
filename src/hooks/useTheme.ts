import { useColorScheme } from "react-native";
import Colors from "../constants/colors";

const useTheme = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  return { theme, colorScheme: colorScheme ?? "light" };
};

export default useTheme;
