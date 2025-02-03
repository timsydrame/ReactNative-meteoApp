import { View, Text } from "react-native"; // ✅ Fusionné en un seul import
import { s } from "./Home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoAPI } from "../../api/meteo";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo-service";

export function Home() {
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords && !weather) {
      fetchWeather(coords);
    }
  }, [coords]); // Ne se déclenche que si `coords` change

  async function getUserCoords() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      console.log("Nouvelle position:", location.coords); // Debug
      setCoords((prevCoords) => {
        if (
          !prevCoords ||
          prevCoords.lat !== location.coords.latitude ||
          prevCoords.lng !== location.coords.longitude
        ) {
          return {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          };
        }
        return prevCoords; // Empêche la mise à jour inutile
      });
    } else {
      console.log("Permission refusée, utilisation des coordonnées par défaut");
      setCoords({ lat: 48.85, lng: 2.35 });
    }
  }

  async function fetchWeather(coordinates) {
    console.log("Récupération de la météo pour:", coordinates); // Debug
    try {
      const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
      console.log("Données météo récupérées:", weatherResponse); // Debug
      setWeather(weatherResponse);
    } catch (error) {
      console.error("Erreur lors de la récupération de la météo:", error);
    }
  }

  return currentWeather ? (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city="Ville inconnue"
          interpretation={getWeatherInterpretation(currentWeather.weathercode)}
        />
      </View>
      <View style={s.searchbar_container}></View>
      <View style={s.meteo_advanced}></View>
    </>
  ) : (
    <View style={s.loadingContainer}>
      <Text>Chargement des données météo...</Text>
    </View>
  );
}
