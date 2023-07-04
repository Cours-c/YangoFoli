import React from "react";
import {TouchableOpacity , View , StyleSheet, Text , Image ,Dimensions} from "react-native";
import { AntDesign } from "@expo/vector-icons";
function MenuItem (props){
 
    let cardWidth  = (Dimensions.get('window').width-(20*2 +20))/2
    return (
        <TouchableOpacity activeOpacity={0.8}  style = {{width : cardWidth}}>
          <View style={{backgroundColor: '#E9E9E9' , padding:10 , borderRadius : 30}}>
            <View>
              <Image
              source= {{uri : props.image}}
                style={style.menuImg}
              ></Image>
              <View style={{ gap: 5  , marginVertical : 15}}>
                <Text style={style.menuPrice}>{props.price}</Text>
                <Text style={style.menuDesc}>{props.title}</Text>
                <Text numberOfLines={2}>{props.description}</Text>
                <Text>{props.piece}</Text>
               
              </View>
            </View>

            <View>
              <View style={style.addBtn}>
                <AntDesign name="plus" size={18} color="black" />
                <Text
                  style={{ fontSize: 18, fontWeight: "600" }}
                  numberOfLines={1}
                >
                  Ajouter
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    );
}
const style = StyleSheet.create({
      
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 20,
    gap: 10,
  },
  menuPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuQte: {
    fontSize: 14,
    opacity: 0.8,
  },
  menuImg: {
   // margin: 10,
    height: 150,
    borderRadius: 20,
    width : "100%"
  },
});
export   {MenuItem};