import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { s } from "./Clock.style.js";

export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(intervalId); // Nettoie l'intervalle au démontage
  }, []);

  return <Text style={s.clockText}>{time}</Text>; // Applique seulement le style `clockText` au texte
}
