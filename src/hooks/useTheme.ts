import { useColorScheme } from "react-native";
import Colors from "../constants/colors";

const useTheme = () => {
  const colorScheme = useColorScheme();
  return Colors[colorScheme ?? "light"];
};

export default useTheme;
