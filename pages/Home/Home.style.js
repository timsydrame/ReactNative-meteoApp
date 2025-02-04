import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  meteo_basic: {
    flex: 2,
  },
  searchbar_container: {
    flex: 2,
  },
  meteo_advanced: {
    flex: 1,
  },
  clockContainer: {
    alignItems: "center", // Centrer l'horloge
    paddingVertical: 10,
  },
 text: {
    fontSize: 40, // Taille du texte
    fontWeight: "bold", // Mettre le texte en gras
    color: "#fff", // Couleur du texte (blanc)
  },
});

export { s };
