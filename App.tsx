import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, useColorScheme } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./src/constants/colors";
import MyProvider from "./src/context/MainContext";

export default function App() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <MyProvider>
      <SafeAreaProvider>
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <HomeScreen />
          <StatusBar
            translucent
            style={colorScheme === "dark" ? "light" : "dark"}
          />
        </View>
      </SafeAreaProvider>
    </MyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
