import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import { s } from "./MeteoBasic.style.js";

export function MeteoBasic({ temperature, city, interpretation }) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>

      <Txt>{city}</Txt>

      <Txt style={s.weather_label}>{interpretation.label}</Txt>

      <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}°</Txt>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}