import { View } from "react-native";
import {
  s,
  StyledContainer,
  StyledLabel,
  StyledValue,
} from "./MeteoAdvanced.style.js"; // Assure-toi que le fichier de style existe
import { Txt } from "../Txt/Txt"; // Si tu as un composant Txt, sinon tu peux l'ignorer

export function MeteoAdvanced({ dusk, dawn, wind }) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledValue>{dusk}</StyledValue>
        <StyledLabel>Aube</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{dawn}</StyledValue>
        <StyledLabel>Crépuscule</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{wind} km/h</StyledValue>
        <StyledLabel>Vent</StyledLabel>
      </StyledContainer>
    </View>
  );
}
