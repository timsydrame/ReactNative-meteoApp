import { View, Text } from "react-native";
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
  const [city, setCity] = useState(""); // Ajouter un état pour la ville
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchCity(coords);
      fetchWeather(coords);
    }
  }, [coords]);

  async function getUserCoords() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: 48.85, lng: 2.35 });
    }
  }

  async function fetchWeather(coordinates) {
    try {
      const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
      setWeather(weatherResponse);
    } catch (error) {
      console.error("Erreur lors de la récupération de la météo:", error);
    }
  }

  async function fetchCity(coordinates) {
    try {
      const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
      setCity(cityResponse); // Mettre à jour la ville
    } catch (error) {
      console.error("Erreur lors de la récupération de la ville:", error);
    }
  }

  return currentWeather ? (
    <>
      <View style={[s.meteo_basic, s.text]}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city || "Ville inconnue"}  // Afficher la ville
          interpretation={getWeatherInterpretation(currentWeather.weathercode)}
        />
      </View>
    </>
  ) : (
    <View style={s.loadingContainer}>
      <Text>Chargement des données météo...</Text>
    </View>
  );
}
