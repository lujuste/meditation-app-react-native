import { ThemeProvider } from "styled-components";
// import Welcome from "./src/screens/Welcome";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
// import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import PublicRoutes from "./src/routes/app.public.routes";
import { StatusBar, Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <Text> Carregando fontes...</Text>;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        translucent
      />
      <PublicRoutes />
    </ThemeProvider>
  );
}
