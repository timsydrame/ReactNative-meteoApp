import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },

  weather_label: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
    fontSize: 30,
    color: "white",
  },

  image: {
    height: 90,
    width: 90,
  },
  temperature_box: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temperature: {
    fontSize: 160,
    color: "white",
  },
  city:{
    fontSize: 30,
  },
  text: {
    color: "white",
  },
});

export { s };
