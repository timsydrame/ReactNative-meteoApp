import { TextInput } from "react-native";
import { s } from "./Searchbar.style.js";  // Assurez-vous que les styles sont bien définis dans Searchbar.style.js

export function Searchbar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={onSubmit}  // Lorsque l'utilisateur soumet la ville
      style={s.input}
      placeholder="Chercher une ville... Ex: Paris"
    />
  );
}
