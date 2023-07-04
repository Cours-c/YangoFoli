import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
function RoundedButton(props) {
  return (
    <View style={style.btnFav}>
      <TouchableOpacity >
        <FontAwesome5  name={props.icon} size={20} color="black" onPress={() => props.onPress()} />
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  btnFav: {
    width: 36,
    height: 36,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255,0.5)",
  },
});
export default RoundedButton;
