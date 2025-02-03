import { Home } from "./pages/Home/Home";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import backgroundImg from "./assets/background.png"; // Import du fond
import { s } from "./App.style";

export default function App() {
  return (
    <ImageBackground
      source={backgroundImg} // Image de fond globale
      style={s.img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
