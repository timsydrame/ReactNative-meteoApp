import { Image, View, Text } from "react-native";
import { s } from "./MeteoBasic.style.js";
import { Clock } from "../../components/Clock/Clock.jsx"; // Import du composant Clock

export function MeteoBasic({ temperature, city, interpretation }) {
  return (
    <>
    <View style={s.clock}>
      <Clock /> {/* Affichage de l'horloge */}
    </View>


      <Text style={[s.text, s.city]}>{city}</Text>

      <Text style={s.weather_label}>{interpretation.label}</Text>

      <View style={s.temperature_box}>
        <Text style={s.temperature}>{temperature}°</Text>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}
