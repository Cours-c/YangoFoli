import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import RoundedButton from "./RoundedButton";

function RestaurantItem(props) {
  const Navigation = ()=>{
    props.navigation.navigate("Details" , {
      id : props.id
    })
  }
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=>Navigation()}>
     
      <View>
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          
          <ImageBackground
            source={{
              uri: props.bg,
            }}
            style={style.restoBG}
          >
            <View style={style.wrapperTop}>
              <View style={style.alert}>
                <View style={style.alertIcon}>
                  <FontAwesome5 name="walking" size={16} color="white" />
                </View>
                <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
                  Livraison gratuite
                </Text>
              </View>
              <RoundedButton name="heart"/>
            </View>
            <View style={style.wrapperBottom}>
              <View style={style.duration}>
                <FontAwesome5 name="bicycle" size={16} color="white" />
                <Text
                  numberOfLines={1}
                  style={{ fontWeight: "bold", color: "white", marginLeft: 6 }}
                >
                  {props.duration}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: 800, fontSize: 22 }}>{props.name}</Text>
        <View style={style.reviewRapport}>
          <FontAwesome name="star" size={16} color="#666" />
          <Text>
            {props.note}
            {props.avis}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  restoBG: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  wrapperTop: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewRapport: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  wrapperBottom: {},
  duration: {
    backgroundColor: "#000",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    alignSelf: "flex-end",
    flexDirection: "row",
    padding: 10,
  },

  alert: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
    alignSelf: "flex-start",
    borderRadius: 30,
  },
  alertIcon: {
    marginRight: 6,
    width: 25,
    height: 25,
    backgroundColor: "#03a583",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default RestaurantItem;
